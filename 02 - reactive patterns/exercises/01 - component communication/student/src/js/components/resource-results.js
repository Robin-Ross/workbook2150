const template = document.createElement('template');
// TODO: Update the template to support dynamic results (NOTE: we are not altering the badge count at this time)
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
  <section class="h-100">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between align-items-center">
        <strong>Results</strong>
        <span class="badge text-bg-secondary">4</span>
      </div>

      <div class="list-group list-group-flush">
         <!-- results will be injected here, by selecting for .list-group and embedding inner HTML -->
      </div>

    </div>
  </section>`;

class ResourceResults extends HTMLElement {
  // TODO: Create a private field for results data
  #results = [];
  constructor() {
    super();
    this.#results = [];
    // TODO: Bind the handleResultClick method to this instance

    this.attachShadow({ mode: 'open' });
  }

  // TODO: Implement setter for results data, remember to render
  set results(array) {
    this.#results = array;
    this.render();
  }

  // TODO: Add an event handler method for result selection
  _resultSelected(result) {
    // this.dispatchEvent(new CustomEvent('resource-selected', {
    //   detail: {
    //     resource: {
    //       id: string,
    //       title: string,
    //       category: string,
    //       summary: string,
    //       location: string,
    //       hours: string,
    //       contact: string,
    //       virtual: boolean,
    //       openNow: boolean,
    //     },
    //   },
    //   bubbles: true,
    //   composed: true,
    // }));
  }

  connectedCallback() {
    // TODO: Add a click event listener to handle result selection
    
    this.render();
  }

  // TODO: Clean up event listener in disconnectedCallback

  

  render() {
    // TODO: Update to render from the private results field, if it's empty, show "No results found" message
    
    const content = template.content.cloneNode(true);
    const listGroup = content.querySelector('.list-group');

    // Only resolves as true if results contains items
    if (this.#results.length) {
      const resultsHTML = this.#results.map(
        result => `
        <button type="button" class="list-group-item list-group-item-action data-id="${result.id}">
          <div class="d-flex w-100 justify-content-between">
            <h2 class="h6 mb-1">${result.title}</h2>
            <small>${result.category}</small>
          </div>
          <p class="mb-1 small text-body-secondary">${result.summary}</p>
          <small class="text-body-secondary">${result.location}</small>
        </button>`,
      );

      // .join makes the array into a single string.
      listGroup.innerHTML = resultsHTML.join('');
    } else {
      listGroup.innerHTML = `
      <div class="list-group-item">
        <p class="mb-0">No results found.</p>
      </div>`;
    }

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(content);
  }
}

customElements.define('resource-results', ResourceResults);