# Khmer Farm Seller Companion

ICT 304 final project (individual, standalone, no backend).
A React Native (Expo) app for Khmer farmers and handmade-product sellers to
record products, harvests and sales, see price history, and share product cards
to Telegram or Facebook.

Status: folder structure only. No code yet.

## Planned screens (see the design sketch)
1. Profile setup (first launch)
2. My products (home)
3. Add / edit product
4. Product detail
5. Record harvest
6. Record sale
7. Share product card
8. Sales and income

## Folder guide
- `docs/` – handout and planning notes
- `src/screens/` – one folder per tab: setup, products, sales, profile
- `src/components/` – reusable UI pieces (cards, buttons, inputs)
- `src/navigation/` – tabs and stack navigation
- `src/database/` – local SQLite: tables for Profile, Product, Harvest, Sale
- `src/services/` – device features (image picker, view capture, share sheet)
- `src/hooks/` – shared React hooks
- `src/utils/` – helpers (stock and total calculations, date formatting)
- `src/constants/` – colors, sizes, categories
- `src/i18n/` – Khmer / English text
- `assets/` – images and fonts (e.g. a Khmer font)
