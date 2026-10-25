# AGENTS.md — Ghumio Project Instructions

## 1. Project Overview

Ghumio is a Nepal-focused travel marketplace that brings together:

- Tours and holiday packages
- Bus ticket bookings
- Hotels and stays
- Activities and events

The platform serves Nepali travelers, international tourists visiting Nepal, and travel businesses.

The current project priority is **frontend UI/UX only**.

The goal is to create a premium, thoughtful, responsive, client-presentation-ready travel marketplace.

Do not implement backend functionality unless explicitly requested.

---

## 2. Core Development Principles

Every agent working on this repository must follow these principles:

1. Inspect the existing project before making changes.
2. Preserve the existing architecture and conventions.
3. Prioritize excellent UI/UX over adding unnecessary features.
4. Build reusable components instead of duplicating UI.
5. Keep the application functional and runnable after every major change.
6. Use realistic mock data for frontend functionality.
7. Avoid unnecessary dependencies.
8. Do not introduce backend infrastructure.
9. Validate changes before committing.
10. Commit completed major milestones using meaningful Git messages.

Do not blindly rewrite the project, replace the framework, or introduce a new UI library without a strong reason.

---

## 3. UI-First Scope

The current scope is frontend implementation only.

### In scope

- Customer-facing marketplace
- Homepage and travel discovery
- Search and filtering
- Tour, hotel, bus, and activity detail pages
- Booking and checkout UI
- Customer account and My Trips
- Supplier dashboard UI
- Admin dashboard UI
- Responsive layouts
- Mock data
- Frontend interactions
- Design system
- Accessibility
- Motion and microinteractions
- Visual quality improvements

### Out of scope unless explicitly requested

- Backend APIs
- Database implementation
- Authentication infrastructure
- Real payment processing
- Real booking transactions
- Supplier integrations
- Inventory synchronization
- Real email or SMS delivery
- Production financial settlements
- Real customer or supplier data

Use local state and mock data to simulate interactions.

Never claim a simulated transaction is a real booking or payment.

---

## 4. Ghumio Brand Identity

The uploaded Ghumio logo is the source of truth for the visual identity.

Inspect the logo assets before modifying brand colors.

The brand includes:

- Vibrant orange
- Warm yellow
- Cyan / turquoise
- Bright blue
- Deep navy
- Warm off-white

Use these colors consistently throughout the application.

### Initial color tokens

```css
:root {
  --brand-orange: #f45b18;
  --brand-yellow: #ffb91f;
  --brand-cyan: #08c5c9;
  --brand-blue: #1769f5;
  --brand-navy: #101d45;

  --brand-primary: #f45b18;
  --brand-primary-hover: #df4810;

  --background: #fffcf7;
  --surface: #ffffff;
  --surface-secondary: #f7f8fa;

  --text-primary: #101d45;
  --text-secondary: #657084;
  --text-muted: #9299a8;

  --border: #e8eaf0;
  --border-strong: #d7dbe5;

  --success: #15803d;
  --warning: #b7791f;
  --error: #dc2626;
  --info: #1769f5;
}
```

These are initial values. Refine them based on the actual logo.

### Color usage

- Deep navy: primary text, headings, navigation.
- Orange: primary actions and important highlights.
- Blue: links, secondary interactions, selected states.
- Cyan: subtle accents.
- Yellow: occasional badges and promotional highlights.
- Warm off-white: primary page background.
- White: cards, panels, and elevated surfaces.

Do not make the interface look like a rainbow.

Use the vibrant logo colors as accents, not as the background of every component.

Avoid excessive gradients and multicolor effects.

---

## 5. Visual Design Direction

Ghumio should feel like a premium travel marketplace with a distinctive Nepal identity.

The interface must be thoughtful, human-designed, and visually polished.

Avoid generic AI-generated website patterns.

Do not use:

- Excessive gradients
- Glassmorphism everywhere
- Random decorative blobs
- Excessively rounded cards
- Huge empty hero sections
- Repetitive card layouts
- Unnecessary floating elements
- Generic SaaS styling for the customer experience
- Emoji as the main icon system
- Inconsistent spacing
- Random typography
- Excessive shadows
- Placeholder text
- Fake reviews or unsupported claims

Use:

- Strong visual hierarchy
- Intentional whitespace
- Consistent spacing
- High-quality travel imagery
- Clear typography
- Refined card layouts
- Thoughtful navigation
- Meaningful microinteractions
- Accessible contrast
- Responsive layouts
- Consistent component states

Use Inter, Manrope, Plus Jakarta Sans, or an existing suitable project font.

Do not introduce a new font unnecessarily.

---

## 6. UX Principles

Design for real users booking travel in Nepal.

Prioritize:

- Easy discovery
- Clear navigation
- Trust and transparency
- Simple booking flows
- Clear pricing
- Clear cancellation information
- Understandable availability
- Mobile usability
- Fast visual comprehension
- Accessible controls

Avoid unnecessary steps.

Every page should have a clear primary action.

Every visible interactive element must perform a meaningful action.

Do not create buttons that look functional but do nothing.

Use appropriate loading, empty, error, disabled, and success states.

Use realistic Nepal-specific examples and NPR pricing.

Clearly identify mock content where necessary.

---

## 7. Responsive Design

Every page must support:

- Desktop
- Laptop
- Tablet
- Mobile

Do not treat mobile as an afterthought.

Use responsive layouts intentionally.

Mobile experiences should include:

- Touch-friendly controls
- Compact navigation
- Responsive search
- Mobile filter drawers
- Appropriate sticky booking actions
- Clear checkout flows
- No horizontal overflow

Test representative viewport sizes whenever browser or visual testing tools are available.

---

## 8. Component Architecture

Follow the existing project structure.

Create reusable components for repeated patterns.

Examples:

- Header
- Footer
- Search panel
- Search fields
- Destination cards
- Tour cards
- Hotel cards
- Bus cards
- Activity cards
- Price displays
- Rating displays
- Booking panels
- Filter controls
- Buttons
- Inputs
- Dialogs
- Drawers
- Toasts
- Empty states
- Loading states

Use shared design tokens for colors, typography, spacing, borders, and shadows.

Avoid duplicated styles and unnecessary component abstractions.

Keep components maintainable and easy to modify.

---

## 9. Installed Skills and Agents

Before major UI work:

1. Inspect the available installed skills.
2. Read relevant skill instructions.
3. Identify which agents and tools can materially improve the task.
4. Use them for specific responsibilities.
5. Integrate their findings into the implementation.

Prioritize skills related to:

- Product design
- Design systems
- UX research
- Visual design
- Frontend architecture
- UI styling
- Responsive design
- Interaction design
- Motion
- Accessibility
- Visual review
- Frontend quality

Use relevant skills such as:

- `design`
- `design-dna`
- `design-system`
- `design-taste-frontend`
- `ui-ux-pro-max`
- `impeccable`
- `high-end-visual-design`
- `minimalist-ui`
- `image-to-code`
- `ui-styling`
- `prototype`
- `motion-design`
- `gpt-taste`
- `review-animations`

Discover additional skills when appropriate.

Do not invoke every available skill indiscriminately. Use relevant skills meaningfully.

Do not stop at planning or recommendations. Implement the improvements.

---

## 10. Motion and Interaction

Use motion to improve usability and perceived quality.

Appropriate examples:

- Hover transitions
- Button feedback
- Search panel transitions
- Drawer animations
- Dialog transitions
- Tab changes
- Booking step transitions
- Image gallery transitions

Animations should be subtle, fast, and purposeful.

Avoid distracting animations, excessive parallax, and animated gradients.

Respect `prefers-reduced-motion`.

Prioritize performance.

---

## 11. Git Workflow — Mandatory

Work in clear, validated phases.

After each major completed phase:

1. Inspect the Git status.
2. Review the diff.
3. Run available checks.
4. Fix errors.
5. Validate the UI.
6. Commit the completed work.

Do not wait until the entire project is finished to commit.

### Suggested commit messages

```text
feat(ui): build Ghumio design foundation and homepage
feat(ui): build travel discovery and detail experiences
feat(ui): build customer booking and account flows
feat(ui): build supplier portal experience
feat(ui): build admin dashboard experience
polish(ui): refine Ghumio marketplace experience
```

### Git safety

- Never overwrite unrelated user changes.
- Never use destructive Git commands without explicit approval.
- Do not blindly run `git add .`.
- Inspect the diff before committing.
- Do not commit broken code intentionally.
- Do not amend existing commits unless explicitly requested.
- Do not commit secrets, credentials, or environment files.
- Keep the application runnable after each major milestone.

If validation fails, fix the issue before committing.

If the repository has existing uncommitted changes, preserve them.

---

## 12. Quality Assurance

Before declaring a task complete:

- Check for compilation errors.
- Check for runtime errors.
- Check the browser console when available.
- Test major interactions.
- Test responsive layouts.
- Review visual consistency.
- Check color usage against the Ghumio logo.
- Verify all primary buttons work.
- Check for broken images.
- Check for horizontal overflow.
- Review accessibility.
- Review the Git diff.

Use browser automation, screenshot tools, and visual review tools when available.

Never claim a test was performed if it was not.

---

## 13. Agent Communication

For substantial tasks, report:

### Completed

What was implemented.

### Design decisions

Important UI/UX decisions and why they were made.

### Validation

What was tested and what passed.

### Git

Commit hash and commit message.

### Next phase

The next logical implementation step.

Do not provide lengthy progress updates without useful information.

Do not stop for approval after every small task.

Ask for clarification only when an important product decision cannot reasonably be inferred.

---

## 14. Final Principle

**Ghumio is a travel marketplace, not a generic AI-generated dashboard.**

Every implementation decision should improve the quality of the product experience.

Prioritize:

1. Excellent customer UX
2. Strong visual identity
3. Consistent design system
4. Responsive frontend
5. Meaningful interactions
6. Maintainable implementation
7. Reliable Git workflow

Build a product that looks thoughtfully designed, feels trustworthy, and is ready to present to a client.

The current priority is UI/UX only.
