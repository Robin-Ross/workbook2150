const template = document.createElement('template');
template.innerHTML = `
<div class="d-flex flex-wrap justify-content-between align-items-end gap-2">
  <div>
    <h1 class="h3 mb-1">NAIT Resource Directory</h1>
    <p class="text-body-secondary mb-0">
      Find student support services, labs, and campus resources.
    </p>
  </div>
</div>
`
document.body.appendChild(template);

class ResourceHeader extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('resource-header', ResourceHeader);
export default ResourceHeader;