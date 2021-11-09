// We should create a data library to share this schema.
// Note that we're only using a subset of the fields from the API, so we should
// introduce a date mapper layer to address this.
export interface RawFile {
  // center: string;
  title: string;
  // photographer: string;
  // keywords: string[];
  // location: string;
  nasa_id: string;
  // media_type: string;
  date_created: string;
  // description: string;
  // description_508: string;
  // secondary_creator: string;
  // album: string[];
}

export interface Link {
  href: string;
  // rel: string;
  // render: string;
}

export interface Item {
  // href: string;
  data: RawFile[];
  links: Link[];
}

export interface Metadata {
  total_hits: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Link2 {
  // rel: string;
  // prompt: string;
  href: string;
}

export interface Collection {
  // version: string;
  // href: string;
  items: Item[];
  // metadata: Metadata;
  // links: Link2[];
}

export interface ApiResponse {
  collection: Collection;
}

describe('nasa-search', () => {
  beforeEach(() => cy.visit('/'));

  it('can search for photos', () => {
    // Stub the API response.
    const url = `https://images-api.nasa.gov/search?&media_type=image&q=Apollo&year_start=2021&page=1`;
    const staticResponse: ApiResponse = {
      collection: {
        items: [
          {
            data: [
              {
                nasa_id: 'apollo',
                title: 'Apollo taking off',
                date_created: '2021-04-21T00:00:00Z',
              },
            ],
            links: [
              {
                href: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1308&q=80',
              },
            ],
          },
        ],
      },
    };
    cy.intercept(url, staticResponse);

    // Stub the system date so that we can deterministically test the created at timestamp.
    cy.clock(new Date('2021-04-22T00:00:00Z'));

    // Get the search input, type a term into it and submit the form by pressing enter.
    cy.findByTestId('input-search').clear().type('Apollo').type('{enter}');

    // Check some of the meta info
    cy.findByTestId('meta-filename').should('have.text', 'Apollo taking off');
    cy.findByTestId('meta-created-at').should('have.text', '1 day ago');

    // Check there's a link to the file detail screen
    cy.findByRole('link').should('have.attr', 'href', '/files/apollo');
  });

  it('tells the user when no files were found', () => {
    // Stub the API response.
    const url = `https://images-api.nasa.gov/search?&media_type=image&q=Apollo&year_start=2021&page=1`;
    const staticResponse: ApiResponse = {
      collection: {
        items: [],
      },
    };
    cy.intercept(url, staticResponse);

    // Get the search input, type a term into it and submit the form by pressing enter.
    cy.findByTestId('input-search').clear().type('Apollo').type('{enter}');

    cy.findByText('Nothing was found!').should('be.visible');
  });
});
