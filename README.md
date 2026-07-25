# Meet Nhân Lê — a site for his family

This is a small website about Nhân Lê. Its job is to let anyone — family,
friends, or a stranger who saw his name in the news — meet him as a person.

It is a **draft**. Nothing here is final, and every word of it can be
changed by his family.

---

## Before anything else

**This site should not go public until Nhân's family has seen it and said
yes.** A memorial is a claim about who someone is, and that claim belongs
to the people closest to him. Show it to Hiếu first, as a proposal, not as
a finished thing.

Two things worth asking them directly:

- Do they want this at all?
- Is the wording right, especially the "Who he is" section?

Also: **have a Vietnamese speaker read every Vietnamese line before it goes
out.** The translations here are a starting point and should be corrected
by someone who speaks it natively — ideally by the family. Every Vietnamese
sentence sits directly underneath its English one in the files, so a
translator can fix them without touching any code.

---

## What is in here

```
index.html          the main page — meet Nhân
action.html         a separate page about preventing this happening again
README.md           this file

assets/
  styles.css        how everything looks
  site.js           makes the language switch and the walls work
  photos.js         >>> the ONE file you edit to add photographs
  memories.js       >>> the ONE file you edit to add memories
  photos/           put the actual picture files in here
```

Almost everything you will ever want to change is in **photos.js** and
**memories.js**, and both of them have step-by-step instructions written
at the top.

---

## The three things to do before sharing the link

### 1. Add his portrait

Save the photo as `assets/photos/portrait.jpg`. That is the only filename
that works. Until it exists, the page shows a quiet placeholder instead of
looking broken.

### 2. Make the photo album link work

Right now the two buttons near the bottom of the main page go nowhere.

Open `index.html`, find the section headed **SECTION 5 — HOW TO ADD
SOMETHING**, and follow the instructions there. In short:

- Make a shared album in Google Photos, set it so anyone with the link can
  **add** photos, and paste that link into the first button.
- Put a real email address into the second button.

Optional but genuinely useful at a gathering or a service: make a free QR
code for the album link, save it as `assets/photos/qr-album.png`, and it
will appear on the page automatically.

### 3. Check the fundraiser link

It appears in the footer of both pages. Search the files for `gofund.me`
and update it if it ever changes.

---

## Putting it online with GitHub Pages

1. Make a new repository on GitHub.
2. Upload everything in this folder, keeping the folder structure as it is.
3. Go to **Settings → Pages**, and under "Branch" choose `main` and `/root`.
4. Wait a minute or two. GitHub gives you the web address.

To change anything after that, edit the file on GitHub and save. The site
updates itself within about a minute.

---

## Why photos are added by hand

Photographs are added by editing `photos.js` rather than appearing
automatically from a shared album. That is deliberate.

People send in photographs with other people in them — someone's children,
someone going through a hard year, someone who would not want to be on a
public website. Somebody should look at each one before it goes up. On a
page like this, that is care, not bureaucracy.

The same is true for the memories. The community sends things in; a person
who loves Nhân decides what goes on his page.

---

## If you want an open comment box later

This draft has no live comment box. Anything people send arrives by email
or message, and whoever is looking after the site adds it.

That is the safer choice while things are raw. If the family later wants
comments open to the public, a free tool called **Giscus** can be added in
about ten minutes, and it has a setting that keeps every comment hidden
until someone approves it. Please use that setting if you turn it on.

---

## Keeping the two pages separate

The main page is about Nhân. The action page is about the system that
failed him. They are linked, but they are not mixed together, and it is
worth keeping it that way.

His grandmother should be able to sit with the first page without being
asked to do anything.

---

## If the page ever goes blank

You are almost certainly missing a comma, or have one too many, in
`photos.js` or `memories.js`. Both files explain the comma rule at the
bottom of the list. Undo your last change and the page comes back.
