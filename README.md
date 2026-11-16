# Motion-Regime-Aware Insect Tracking — Project Website

Static project page for *Motion-Regime-Aware Mask-Level Insect Tracking Across Multi-View and Rotating-Specimen Acquisitions* (AJCAI 2026).

## Publish on GitHub Pages

1. Create a repository under `CSIRO-SD`, for example `insect-tracking` (the name is a suggestion, not an existing repository).
2. Upload the **contents** of this folder into the repository root. `index.html` must be at the root, not inside another folder.
3. Open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch **main**, folder **/ (root)**, then save.
4. For that example repository name, the expected website address is `https://csiro-sd.github.io/insect-tracking/`. GitHub Pages displays the actual URL after deployment.

All assets use relative paths, so the site works at any repository subpath. No npm, build process, API keys, external fonts, or JavaScript dependencies are required. `.nojekyll` is included.

## Local preview

Run `python3 -m http.server 8080` inside this folder and open `http://localhost:8080`.

## Release links

The source ZIP has LaTeX and figures, but no compiled paper PDF, release URLs, or videos. Paper and Code are visibly marked coming soon. In `index.html`, replace each corresponding `<span class="pill unavailable">…</span>` with `<a class="pill" href="YOUR_URL">…</a>` when ready. Do not use `llncsdoc.pdf` as the paper: it is the Springer template documentation.

The BibTeX entry intentionally omits unknown DOI, volume, and page numbers. Update these from the final proceedings record. Confirm author names, affiliation wording, and the Oral Presentation label before publication.

## Content and implementation

- Text, all numerical results, author order, affiliations, ORCID links, and figures are taken from the supplied manuscript, except the oral label supplied by the author in the conversation.
- Tables 1–3 are reproduced without changing numerical values. The highlighted ablation row is the chosen configuration, not the best value in every column.
- Tabs switch between static qualitative figures; no live model inference or video is implied.
- Figures support modal enlargement and Escape to close. The example tabs support keyboard navigation; citation copying has a manual fallback.
- Layout structure is inspired by GeoCond; HTML, CSS, JavaScript, and the small favicon are newly written. GeoCond code and assets are not copied.
- Paper figures retain their original rights. No open-source licence is assigned to the research materials by this package.

## Files

`index.html`, `style.css`, `script.js`, `citation.bib`, `.nojekyll`, and `assets/` form the deployable website. This README is optional for hosting.

## Updated presentation

The conference label follows the reference layout beneath the affiliations. Section headings are centered with no uppercase kicker labels. Both qualitative panels display all supplied image parts as a single continuous figure; the ZIP did not contain an unsplit original. Enlargement displays all parts together.

The interface palette is muted indigo blue; original research figures retain their original colors.

All three experiment tables are directly visible. Each is followed by numerical comparisons and interpretation grounded in the manuscript.
