# Sweet Crumbs Bakery — Website Project (Part 3)

## Student and project details
- **Student:** Bontle Maloka
- **Student number:** ST10487239
- **Module/task:** WEDE5020 Web Development — Part 3 (enhancing functionality and SEO)
- **Business:** Sweet Crumbs Bakery
- **Website type:** Responsive multi-page small-business website

## Project overview
Sweet Crumbs Bakery is a small bakery concept offering everyday baked goods, celebration cakes, cupcakes and treat boxes. This website introduces the business, describes services, displays a gallery and provides separate customer contact and order-enquiry forms. Part 3 builds on the Part 2 project rather than replacing the original business idea or page structure.

## Pages and main features
- `index.html` — business introduction, service highlights, calls to action and expandable FAQ accordion.
- `about-us.html` — business story and values.
- `services.html` — product/service descriptions, example price table and live text search/filter.
- `gallery.html` — category filter and keyboard-accessible lightbox for larger image views.
- `enquiry.html` — dedicated order enquiry form for product/service, quantity, date, budget and details.
- `contact-us.html` — contact form for name, email, message type and full message, plus a clearly labelled map demonstration.
- `CSS/style.css` — responsive styling, focus states, hover transitions, reduced-motion support and form feedback.
- `JS/script.js` — form validation, user-friendly error messages, email preparation, gallery lightbox, filters and dynamic year.
- `robots.txt` and `sitemap.xml` — basic crawl guidance and page list. The sitemap uses a sample GitHub Pages base URL that must be replaced with the actual deployed URL.
- `netlify.toml` — basic static deployment configuration and security-related response headers.

## Run and test locally
1. Extract the ZIP file.
2. Open `index.html` in a current browser. A local static server is recommended for more realistic testing of all features.
3. Test every navigation link and the mobile menu at desktop and phone widths.
4. On Services, search for terms such as `cake`, `bread` or `cupcake` and check that results update.
5. On Gallery, change the category filter, open each image, close the lightbox using the close button or backdrop, and test keyboard focus.
6. On the Contact Us and Order Enquiry pages, submit blank fields, invalid email addresses and valid sample details. Check that error messages appear and focus moves to the first invalid field.
7. A valid form opens a pre-filled message in the visitor's email application using a `mailto:` link. The site has no backend and cannot silently send emails. The visitor must review and send the message themselves.
8. Check the browser console for JavaScript errors and test keyboard navigation and responsive layouts.

## Important configuration before publishing
- `hello@sweetcrumbs.example` is a reserved example address, not a working business mailbox. Replace `BAKERY_EMAIL` in `JS/script.js` and the visible email text on the pages with an approved address.
- The telephone number is sample content and must be verified before public release.
- The embedded OpenStreetMap frame is explicitly a Johannesburg map demonstration, not a verified bakery address. Replace it with the real business location or remove the map if no public address is available.
- Replace the sample base URL in `sitemap.xml` and the relative canonical links in the HTML head with the final public website URLs after deployment.
- The prices are illustrative academic examples. Confirm all prices, product availability, collection arrangements and business claims before publishing.
- The contact forms use client-side validation and `mailto:` only. A production business site should use a secure server-side form handler or a trusted form service, protect personal data, and provide a privacy notice. Never put private credentials or API keys in client-side code.

## Part 3 functionality and SEO checklist
- [x] Semantic page titles, descriptions, keyword metadata and mobile viewport settings.
- [x] Consistent heading hierarchy and internal links across pages.
- [x] Descriptive image alt text; existing image filenames are meaningful enough for this small SVG illustration set.
- [x] Responsive layout and keyboard-visible focus states.
- [x] FAQ accordion using native accessible `details` and `summary` elements.
- [x] Service search/filter and gallery category filter.
- [x] Gallery lightbox with close control and descriptive image text.
- [x] Interactive map embed (demo location clearly labelled for replacement).
- [x] Enquiry and contact forms with required fields, client-side validation and clear error feedback.
- [x] Form values compiled into an email draft addressed to the configured recipient.
- [x] `robots.txt`, `sitemap.xml`, basic deployment headers and lazy-loaded gallery images.
- [x] README includes project setup, testing, deployment notes and detailed changelog.
- [ ] Replace placeholder business contact details and verify the actual location.
- [ ] Create descriptive commits and push the updated files to the student's GitHub repository.
- [ ] Deploy the site on GitHub Pages or Netlify and test the public URL.

## SEO and promotion notes
The pages use distinct titles and descriptions based on their content, descriptive headings, internal links, mobile viewport metadata and image alternative text. The keyword metadata is included to meet the assignment checklist, although modern search engines generally place much more weight on useful content, page titles, headings, links and user experience than on the meta-keywords tag. Use a real business name, address and contact details consistently if the bakery has a public location. Off-page SEO work still requires the owner to share the live site on relevant social profiles and earn legitimate links from relevant local directories or partners; those actions cannot be completed by a local ZIP alone.

## GitHub and deployment steps
1. Open the existing Part 2 repository and keep a backup copy before replacing files.
2. Copy the updated project files into the repository folder.
3. Use meaningful commits, for example:
   - `Add separate bakery order enquiry form`
   - `Add client-side validation and mailto form processing`
   - `Add gallery lightbox and category filter`
   - `Add service search, SEO metadata and sitemap`
   - `Document Part 3 changes and testing steps`
4. Push the commits to GitHub.
5. For GitHub Pages, open repository **Settings → Pages**, choose the deployment branch and root folder, save, and wait for the build. For Netlify, import the repository and set the publish directory to the project root (`.`).
6. Test the deployed site on mobile and desktop, then add the actual GitHub repository and live website URLs to your submission. Do not claim a deployment or commits until you have completed them in your own account.

## Detailed changelog
### Version 3.0 — Part 3 functionality and SEO (14 October 2026)
- Added a dedicated `enquiry.html` page so product/order enquiries are separate from general contact messages.
- Updated the contact form to collect full name, email, message type and full message, with required fields, length checks, inline error messages and live status feedback.
- Added an order enquiry form with product/service type, quantity, preferred date, optional budget and order details.
- Added JavaScript validation and compiled successful submissions into a pre-filled email draft. Documented the limitation that `mailto:` requires the visitor to send the email and does not provide server-side delivery.
- Added service search filtering and gallery category filtering with live result counts.
- Added a lightbox for gallery images with accessible labels, close control and descriptive alternative text.
- Added an expandable FAQ section using native HTML disclosure controls.
- Added an OpenStreetMap embed as a labelled demonstration only; the actual business location still needs confirmation.
- Added unique page titles, meta descriptions and keyword metadata, internal links, robots file and sitemap.
- Added reduced-motion styling, visible keyboard focus, form error states and lazy loading for gallery images.
- Added Netlify static deployment configuration with basic response security headers.
- Expanded this README with testing steps, configuration warnings, deployment instructions, SEO notes and a record of changes.

### Version 2.0 — Part 2 styling improvements
- Refined the shared CSS and bakery-inspired colour palette.
- Improved page spacing, responsive grids, typography, cards, buttons and navigation states.
- Kept the existing Sweet Crumbs Bakery concept and core page content.

### Version 1.0 — Initial website
- Created Home, About Us, Services, Gallery and Contact Us pages.
- Added navigation, bakery illustration assets, product/service content and an example price guide.

## References (IIE Harvard-Anglia style)
Google, n.d. *Search engine optimisation (SEO) starter guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 14 October 2026].

MDN Web Docs, n.d.a. *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation [Accessed 14 October 2026].

MDN Web Docs, n.d.b. *HTML forms guide*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms [Accessed 14 October 2026].

MDN Web Docs, n.d.c. *Using the dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog [Accessed 14 October 2026].

Mozilla, n.d. *ARIA: aria-live attribute*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live [Accessed 14 October 2026].

OpenStreetMap contributors, n.d. *OpenStreetMap*. Available at: https://www.openstreetmap.org/ [Accessed 14 October 2026].

The Independent Institute of Education (The IIE), 2025. *Harvard-Anglia style reference guide: adapted for The IIE*. Available at: https://irp.cdn-website.com/271d35b6/files/uploaded/The_IIE_Harvard_Anglia_Style_Reference_Guide_2025.pdf [Accessed 14 October 2026].

## Academic integrity note
This README documents the implementation and external technical resources used. Review the files, understand the JavaScript and forms, test the project yourself, and follow your lecturer's rules for acknowledging assistance and responsible AI use. Do not submit untested features or claim that a real email server, GitHub push or deployment exists unless you have completed and verified it.
