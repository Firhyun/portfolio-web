Build a fully functional, responsive creative portfolio website based on the attached O_STUDIIO_GD UI frames.

Use the attached frames as the exact visual source of truth. Reproduce the composition accurately, then add cursor interaction and motion inspired by https://studiofreight.com/.

Do not copy Studio Freight’s branding, layout, text, or assets. Only adopt its cursor-driven exploration, proximity reveal, image masking, and smooth page-transition principles.

IMPORTANT DESIGN RULES

* Preserve the existing O_STUDIIO_GD layout.
* Preserve all original images and project artwork.
* Preserve the typography, colors, white space, image sizes, image positions, and visual hierarchy.
* Do not generate replacement artwork.
* Do not convert the scattered composition into a conventional card grid.
* Do not add unnecessary UI, navigation, descriptions, buttons, gradients, shadows, or rounded cards.
* The result must feel experimental, editorial, minimal, and intentional.
* Build a functional interactive website, not only static frames.

PAGE MAPPING

Use the attached frames as these pages:

1. White page with scattered project thumbnails and “INVENTIONS DESIGNED TO PERFORM”:
   Home page.

2. Black page with GOODLUCK MOM:
   Goodlac Mom project page.

3. Black page with PERSONAL COFFEE ROASTERY:
   Personal Coffee Roastery project page.

4. Black page with MARRY MINT.CO:
   Marrymint project page.

5. Black page with SAEREAL:
   Saereal project page.

6. Black page with CEMETO:
   Cemeto project page.

7. White page with Firda’s introduction, work experience, CTA, and social links:
   Profile page.

Create working navigation between all these pages.

GLOBAL PAGE BEHAVIOR

* Use smooth client-side page transitions.
* Preserve the user’s visual context when navigating.
* Prevent accidental horizontal page scrolling.
* Keep animation fluid at approximately 60 fps.
* Use transform and opacity for most animations.
* Do not animate width, height, or layout properties when unnecessary.
* All interactive elements must remain clickable and keyboard accessible.

HOME PAGE

The Home page must remain a single editorial canvas with:

* O_STUDIIO_GD logo at the top-left.
* “+ HOME” and “+ PROFILE” navigation at the top-right.
* Five scattered project thumbnails.
* “INVENTIONS DESIGNED TO PERFORM” in the center.
* Copyright and local time at the bottom.

Do not rearrange these elements into rows or cards.

INITIAL PAGE LOAD

When the Home page opens:

1. Show the white background first.
2. Fade and slide in the logo and navigation.
3. Reveal “INVENTIONS DESIGNED TO PERFORM” word by word using a masked upward text reveal.
4. Reveal the project thumbnails using staggered opacity and scale transitions.
5. Reveal the footer information last.

Motion settings:

* Logo and navigation: 400ms fade-in.
* Headline: 600–800ms masked reveal.
* Headline word stagger: 70ms.
* Project thumbnails: opacity 0 to 1 and scale 0.96 to 1.
* Thumbnail stagger: 80–120ms.
* Footer delay: 500ms.
* Easing: cubic-bezier(0.22, 1, 0.36, 1).

CURSOR PROXIMITY EFFECT

Turn the main Home canvas into a cursor-reactive exploration area.

Default state:

* Keep every project thumbnail visible enough to be discoverable.
* Apply a subtle white mosaic mask or reduced opacity over each thumbnail.
* Default thumbnail opacity should remain approximately 25–35%.
* Do not make the images completely invisible.

When the cursor moves across the canvas:

* Reveal the project imagery closest to the cursor.
* Calculate the reveal intensity based on the distance between the cursor and each thumbnail.
* Images closer to the cursor become clearer.
* Images farther from the cursor remain muted.
* Use a soft circular mask combined with a subtle modular or pixel-grid reveal.
* The reveal should follow the cursor with a slight delay.
* Do not apply the proximity effect to text or navigation.

Motion settings:

* Reveal radius: 220–300px.
* Cursor-follow delay: 80–120ms.
* Thumbnail opacity range: 30% to 75%.
* Transition duration: 180–240ms.
* Use requestAnimationFrame or an equivalent smooth animation method.
* Avoid sharp flashing or immediate opacity changes.

PROJECT THUMBNAIL HOVER

Each Home thumbnail represents one project and must be clickable.

When the cursor enters a thumbnail:

* Reveal the complete image at 100% opacity.
* Remove the mosaic mask from the hovered image.
* Scale the image from 1 to 1.025.
* Slightly reduce the opacity of the other thumbnails.
* Add a subtle magnetic movement toward the cursor, with a maximum displacement of 4–6px.
* Change the cursor into a custom circular cursor containing “VIEW”.
* Display the corresponding project title near the cursor.
* Keep the title readable without covering important parts of the artwork.

Map the thumbnails to these projects:

* Green Goodlac Mom packaging → GOODLAC MOM.
* Personal Coffee promotional artwork → PERSONAL COFFEE ROASTERY.
* Wedding website artwork → MARRYMINT.CO.
* Saereal glass/product image → SAEREAL.
* Next Level Business billboard → CEMETO.

When the cursor leaves:

* Return the image to scale 1.
* Remove the “VIEW” cursor label.
* Return all other thumbnails to their proximity-based state.
* Use a 200–260ms ease-out transition.
* Do not hide the image abruptly.

CENTRAL HEADLINE RESPONSE

Default text:

“INVENTIONS DESIGNED TO PERFORM”

When a project thumbnail is hovered:

* Keep “INVENTIONS” and “TO PERFORM” in light gray.
* Transition the emphasized black word into the current project name.
* Alternatively, display the project name directly underneath the headline if replacing the word causes layout instability.
* Use a masked vertical text transition.
* Animate the old label upward and the new label upward from below.
* Duration: 300–400ms.
* Do not change the position of the overall headline container.

When the cursor leaves the project:

* Restore the original headline.
* Use the same transition in reverse.

NAVIGATION INTERACTION

For “+ HOME” and “+ PROFILE”:

On hover:

* Animate the underline from left to right.
* Change the plus symbol into a minus symbol.
* Move the text upward by approximately 1–2px.
* Duration: 180–220ms.

Active state:

* Keep a persistent underline below the active page.
* The active navigation item must remain clickable only when useful.
* Do not apply the image proximity effect to navigation.

PROJECT CLICK TRANSITION

When a user clicks a project thumbnail:

1. Apply a pressed scale of 0.98 for approximately 100ms.
2. Keep the selected image fully visible.
3. Fade out the other thumbnails, headline, navigation, and footer.
4. Expand the selected image slightly toward the center.
5. Transition the white Home background into the black project background.
6. Open the correct project detail page.
7. Reveal the project collage after the black background appears.

Preferred transition:

* Create a black overlay that expands outward from the selected thumbnail.
* The overlay should originate from the clicked image, not from the center of the screen.
* Selected image transition: 450–600ms.
* Background transition: 400–550ms.
* Project content entrance: 500–700ms.
* Keep the complete transition below 1 second.

If an origin-based transition cannot be implemented:

* Use a full-screen black overlay entering from bottom to top.
* Switch pages behind the overlay.
* Reveal the project page after the overlay covers the screen.

PROJECT DETAIL PAGES

Preserve the exact black background and scattered collage arrangement from each attached project page.

Each project page must include:

* A fixed black background.
* The original artwork in its existing position and size.
* The project name near the center.
* Minimal navigation to return to Home.
* No conventional card containers.
* No extra project descriptions unless they already exist in the design.

PROJECT PAGE INITIAL LOAD

When a project page opens:

1. Display the black background.
2. Reveal the project title using a masked upward animation.
3. Reveal the main or largest artwork first.
4. Reveal the surrounding artwork with a stagger.
5. Use different entrance directions based on each image position.

Examples:

* Left-side image enters slightly from the left.
* Right-side image enters slightly from the right.
* Bottom image enters slightly from below.
* Central image uses opacity and scale only.

Motion settings:

* Translate distance: maximum 20–32px.
* Image scale: 0.97 to 1.
* Image opacity: 0 to 1.
* Duration: 500–700ms.
* Stagger: 70–110ms.
* Avoid bouncy motion.

PROJECT COLLAGE CURSOR INTERACTION

When the cursor moves across a project page:

* Apply subtle depth-based parallax to the scattered images.
* Large images move more slowly.
* Smaller images may move slightly faster.
* Maximum movement must remain between 4–10px.
* Do not change the original composition significantly.
* The project title should remain almost stationary.

When an image is hovered:

* Scale the image to 1.02.
* Increase its brightness slightly.
* Reduce surrounding images to approximately 65–75% opacity.
* Add a thin off-white outline if needed.
* Change the custom cursor label to “EXPLORE”.
* Do not use aggressive image inversion.

When the cursor leaves:

* Restore every image to its original position, opacity, and scale.
* Duration: 220–300ms.

CLICKING PROJECT ARTWORK

When a user clicks an artwork image:

* Open it in a minimal full-screen lightbox.
* Use the original high-resolution image.
* Animate the selected image from its canvas position into the center.
* Use a dark backdrop.
* Provide a visible close button.
* Allow closing with the Escape key.
* Do not include captions unless they already exist.

Lightbox animation:

* Backdrop opacity: 0 to 0.92.
* Image scale: 0.92 to 1.
* Duration: 300–450ms.

BACK TO HOME TRANSITION

Add a minimal “← BACK” or “+ HOME” action to every project page.

When selected:

1. Fade the project collage.
2. Transition the black background back to white.
3. Return to the Home page.
4. Restore the Home canvas and previous cursor position state.
5. Briefly highlight the project thumbnail that was previously opened.

Do not reload the entire website.

PROFILE PAGE

Use the attached Profile frame exactly:

* O_STUDIIO_GD logo at the top-left.
* Home and Profile navigation at the top-right.
* Firda’s introduction in the upper-left.
* Decorative O_STUDIIO graphic in the upper-right.
* Work experience in the middle.
* Large “LET’S WORK TOGETHER.” statement near the bottom-left.
* “UNLOCK MY POTANCIAL” CTA on the bottom-right.
* Social links and local time in the footer.

Correct the CTA text only if permitted by the original designer:

“UNLOCK MY POTENTIAL”

PROFILE PAGE MOTION

On entry:

* Reveal the introduction line by line.
* Emphasize “Firda” using a slightly delayed text reveal.
* Fade in the decorative graphic with a slow scale from 0.96 to 1.
* Reveal work experience using opacity and translateY.
* Reveal “LET’S WORK TOGETHER.” word by word.
* Reveal the CTA last.

CTA hover:

* Fill the outlined button with black.
* Change the label and arrow to white.
* Move the arrow diagonally up-right by 3–4px.
* Slightly expand the button horizontally by no more than 6px.
* Duration: 220–280ms.

CTA click:

* Open the intended contact method or contact page.
* Show a clear pressed state before navigation.

SOCIAL LINKS

On hover:

* Animate an underline from left to right.
* Shift the label upward by 1–2px.
* Use a 180–220ms transition.
* Open external links in a new tab.

CUSTOM CURSOR

Desktop only:

* Use the normal cursor outside interactive regions.
* Inside project thumbnails, replace it with a custom circular “VIEW” cursor.
* Inside project artwork, use “EXPLORE”.
* Inside CTA buttons, use a small arrow cursor.
* The custom cursor must follow the pointer with a subtle 60–100ms delay.
* Keep the custom cursor small and readable.
* Never allow the cursor label to block navigation text.

MOBILE AND TABLET

Do not require hover or cursor proximity on touch devices.

Mobile Home:

* Preserve the creative visual character, but reorganize the scattered projects into a controlled vertical editorial sequence.
* Keep alternating image alignment and varied image sizes.
* Keep the project title visible below every image.
* Use scroll-based reveal instead of cursor proximity.
* One tap must open the project.
* Do not require double tapping.

Mobile project pages:

* Convert the collage into a vertical editorial gallery.
* Preserve the original order and artwork.
* Reveal images as they enter the viewport.
* Do not use cursor parallax.
* Keep Back navigation sticky and accessible.

ACCESSIBILITY

* Every project thumbnail must have an accessible project name.
* All interactive elements must work with keyboard navigation.
* Pressing Enter must open the focused project.
* Provide clearly visible focus states.
* Maintain sufficient text contrast.
* Minimum touch target: 44×44px.
* Respect prefers-reduced-motion.
* When reduced motion is enabled:

  * Disable cursor parallax.
  * Disable magnetic movement.
  * Disable shared-element transitions.
  * Replace them with a simple 150–200ms fade.

FINAL REQUIREMENT

The final result should feel like an experimental graphic design portfolio where users discover work through cursor movement.

It should capture the playful and exploratory interaction quality of Studio Freight while preserving O_STUDIIO_GD’s own visual identity, scattered compositions, artwork, typography, monochrome Home and Profile pages, and black project canvases.

Prioritize clarity, responsiveness, and smooth interaction. Do not sacrifice usability for visual effects.
