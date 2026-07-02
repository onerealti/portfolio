#let resume(
  name: "",
  title: "",
  email: "",
  phone: "",
  website: "",
  github: "",
  linkedin: "",
  summary: "",
  body
) = {
  // Page setup - US Letter with professional compact margins
  set page(
    paper: "us-letter",
    margin: (x: 0.5in, y: 0.45in),
  )

  // Configure text properties
  set text(
    font: "Adobe Garamond Pro",
    size: 10.5pt,
    fill: rgb("#0f172a"), // Slate 900
    spacing: 120%,
  )

  // Configure list properties
  set list(
    marker: ([•],),
    body-indent: 5pt,
    indent: 10pt,
  )

  // Header styling
  align(center)[
    #block(spacing: 4pt)[
      #text(size: 19pt, weight: "bold", tracking: 0.5pt)[#name] \
      #v(2pt)
      #text(size: 10.5pt, weight: "medium", fill: rgb("#1e3a8a"), tracking: 0.25pt)[#title]
    ]
    #v(2pt)
    
    #let contact-items = ()
    #if email != "" { contact-items.push(email) }
    #if phone != "" { contact-items.push(phone) }
    #if website != "" { contact-items.push(link(website)[#website.replace("https://", "")]) }
    #if github != "" { contact-items.push(link(github)[#github.replace("https://", "")]) }
    #if linkedin != "" { contact-items.push(link(linkedin)[#linkedin.replace("https://", "")]) }
    
    #text(size: 9pt, fill: rgb("#475569"))[
      #contact-items.join([ #h(6pt) • #h(6pt) ])
    ]
  ]
  v(4pt)

  // Summary section (optional)
  if summary != "" [
    #v(2pt)
    #text(size: 9.5pt, style: "italic", fill: rgb("#334155"))[#summary]
    #v(4pt)
  ]

  // Headings styling
  show heading: it => [
    #v(8pt)
    #text(
      size: 11pt,
      weight: "bold",
      fill: rgb("#1e3a8a"), // Deep Blue
    )[#it.body]
    #v(1pt)
    #line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    #v(3pt)
  ]

  // Body content
  body
}

// Helper for experience items
#let exp-item(
  company: "",
  role: "",
  location: "",
  date: "",
  bullets: ()
) = {
  block(width: 100%, spacing: 6pt)[
    #grid(
      columns: (1fr, auto),
      [*#role* \ #text(weight: "medium", fill: rgb("#334155"))[#company]],
      align(right)[*#date* \ #text(style: "italic", fill: rgb("#475569"), size: 9pt)[#location]]
    )
    #v(-2pt)
    #list(
      tight: true,
      spacing: 4pt,
      ..bullets.map(b => [#b])
    )
  ]
}

// Helper for education items
#let edu-item(
  institution: "",
  degree: "",
  location: "",
  date: "",
  gpa: "",
  details: ()
) = {
  block(width: 100%, spacing: 6pt)[
    #grid(
      columns: (1fr, auto),
      [*#degree* \ #text(weight: "medium", fill: rgb("#334155"))[#institution]],
      align(right)[*#date* \ #text(style: "italic", fill: rgb("#475569"), size: 9pt)[#location]]
    )
    #if gpa != "" [
      #v(-3pt)
      #text(size: 9pt)[GPA: #gpa]
    ]
    #if details.len() > 0 [
      #v(2pt)
      #list(
        tight: true,
        spacing: 3pt,
        ..details.map(d => [#d])
      )
    ]
  ]
}

// Helper for project items
#let proj-item(
  title: "",
  skills: (),
  date: "",
  bullets: ()
) = {
  block(width: 100%, spacing: 6pt)[
    #grid(
      columns: (1fr, auto),
      [*#title* #h(4pt) | #h(4pt) #text(size: 8.5pt, fill: rgb("#475569"), weight: "regular")[#skills.join(" • ")]],
      align(right)[*#date*]
    )
    #v(-2pt)
    #list(
      tight: true,
      spacing: 4pt,
      ..bullets.map(b => [#b])
    )
  ]
}

// Helper for skill categories
#let skill-category(
  category: "",
  items: ()
) = {
  block(width: 100%, spacing: 4pt)[
    #grid(
      columns: (130pt, 1fr),
      [*#category:*],
      [#items.join(", ")]
    )
  ]
}
