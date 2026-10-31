/* Sweet Crumbs Bakery — Part 3 interactive functionality.
   Demo forms open a pre-filled email; replace this address before real use. */
const BAKERY_EMAIL = "hello@sweetcrumbs.example";

function showError(field, message) {
  const error = document.getElementById(`${field.id}-error`);
  field.setAttribute("aria-invalid", message ? "true" : "false");
  if (error) error.textContent = message;
}
function validateField(field) {
  let message = "";
  if (field.required && !field.value.trim()) message = "Please complete this field.";
  else if (field.type === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) message = "Enter a valid email address, for example name@example.com.";
  else if (field.minLength > 0 && field.value.trim().length < field.minLength) message = `Please enter at least ${field.minLength} characters.`;
  showError(field, message);
  return !message;
}
function setupMailForm(form) {
  const fields = Array.from(form.querySelectorAll("input[required], select[required], textarea[required], input[minlength], textarea[minlength]"));
  fields.forEach(field => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => { if (field.getAttribute("aria-invalid") === "true") validateField(field); });
    field.addEventListener("change", () => { if (field.getAttribute("aria-invalid") === "true") validateField(field); });
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const valid = fields.map(validateField).every(Boolean);
    const status = form.querySelector(".form-status");
    if (!valid) {
      status.hidden = false;
      status.textContent = "Please correct the highlighted fields before continuing.";
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    const values = new FormData(form);
    const isEnquiry = form.dataset.mailForm === "enquiry";
    const subject = isEnquiry ? "Sweet Crumbs Bakery — Order Enquiry" : "Sweet Crumbs Bakery — Website Contact";
    const body = Array.from(values.entries()).map(([key, value]) => `${key}: ${value}`).join("\n");
    status.hidden = false;
    status.textContent = "Your details are ready. Your email application should open with the message prepared. Please review it and press Send. If it does not open, email hello@sweetcrumbs.example manually.";
    window.location.href = `mailto:${BAKERY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-menu a").forEach(link => {
    if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
  });
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll("form[data-mail-form]").forEach(setupMailForm);

  const serviceSearch = document.getElementById("service-search");
  if (serviceSearch) {
    const cards = Array.from(document.querySelectorAll("#service-grid .card"));
    const result = document.getElementById("service-results");
    const filter = () => {
      const term = serviceSearch.value.trim().toLowerCase(); let shown = 0;
      cards.forEach(card => {
        const text = `${card.innerText} ${card.dataset.search || ""}`.toLowerCase();
        const match = text.includes(term); card.hidden = !match; if (match) shown++;
      });
      result.textContent = term ? `${shown} matching service${shown === 1 ? "" : "s"} found.` : "Showing all services";
    };
    serviceSearch.addEventListener("input", filter);
  }
  const galleryFilter = document.getElementById("gallery-filter");
  if (galleryFilter) {
    const cards = Array.from(document.querySelectorAll(".gallery-card"));
    const result = document.getElementById("gallery-count");
    galleryFilter.addEventListener("change", () => {
      let shown = 0;
      cards.forEach(card => { const match = galleryFilter.value === "all" || card.dataset.category === galleryFilter.value; card.hidden = !match; if (match) shown++; });
      result.textContent = `Showing ${shown} image${shown === 1 ? "" : "s"}.`;
    });
  }
  const dialog = document.getElementById("gallery-lightbox");
  if (dialog) {
    const image = document.getElementById("lightbox-image"); const caption = document.getElementById("lightbox-caption");
    document.querySelectorAll(".lightbox-trigger").forEach(button => button.addEventListener("click", () => {
      image.src = button.dataset.full; image.alt = button.dataset.alt || "Expanded bakery gallery image";
      caption.textContent = button.closest("figure").querySelector("figcaption")?.textContent || image.alt;
      if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", "open");
    }));
    dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => { const last = document.querySelector(".lightbox-trigger:focus"); if (last) last.focus(); });
  }
});
