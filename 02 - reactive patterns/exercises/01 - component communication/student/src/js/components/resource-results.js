const template = document.createElement('template');
// TODO: Update the template to support dynamic results (NOTE: we are not altering the badge count at this time)
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
  <section class="h-100">
    <div class="card h-100">
      
    </div>
  </section>`;

class ResourceResults extends HTMLElement {
  // TODO: Create a private field for results data
  #results = null;
  constructor() {
    super();
    this.#results = null;
    // TODO: Bind the handleResultClick method to this instance

    this.attachShadow({ mode: 'open' });
  }

  // TODO: Implement setter for results data, remember to render
  set results(object) {
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
    
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('resource-results', ResourceResults);