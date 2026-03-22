// nav.js — shared sidebar navigation
// Injected into every page via <script src="nav.js"></script>
// The calling page sets window.RH_ACTIVE to highlight the current section.

(function () {
  const items = [
    { label: 'Main Index',   href: 'index.html',        img: 'table_cell',  alt: "Robin's Main Index Page" },
    { label: "What's New",   href: 'rh_whats_new.html', img: 'table_cell2', alt: "Robin's What's New Page" },
    { label: 'Articles',     href: 'rh_articles.html',  img: 'table_cell3', alt: "Robin's Articles" },
    { label: 'Links',        href: 'rh_links.html',     img: 'table_cell4', alt: "Robin's Links" },
    { label: 'Contact',      href: 'rh_contact.html',   img: 'table_cell5', alt: "Contact Robin" },
  ];

  // Keys 1-5 match the original image naming (table_cell1_off etc)
  const keys = ['1','2','3','4','5'];

  const active = window.RH_ACTIVE || '';

  let rows = '';
  items.forEach((item, i) => {
    const key = keys[i];
    const isActive = (item.href === active);
    const imgSrc = isActive
      ? `table_cell${key}_on.jpg`
      : `table_cell${key}_off.jpg`;
    rows += `
      <tr>
        <td style="padding:0;text-align:center;vertical-align:middle;width:98px;height:27px;">
          <a href="${item.href}" class="nav-btn"
             onmouseover="this.querySelector('img').src='table_cell${key}_on.jpg'"
             onmouseout="this.querySelector('img').src='${isActive ? `table_cell${key}_on.jpg` : `table_cell${key}_off.jpg`}'">
            <img src="${imgSrc}" alt="${item.alt}" width="98" height="27" style="display:block;border:0;">
          </a>
        </td>
      </tr>`;
  });

  const html = `
    <nav class="sidebar" aria-label="Main navigation">
      <span class="sidebar-spacer"></span>
      <table class="nav-table" role="list">
        ${rows}
      </table>
      <span class="sidebar-spacer"></span>
    </nav>`;

  document.addEventListener('DOMContentLoaded', function () {
    const placeholder = document.getElementById('sidebar-placeholder');
    if (placeholder) {
      placeholder.outerHTML = html;
    }
  });
})();
