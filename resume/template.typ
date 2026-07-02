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
  // Page setup - Us Letter with professional compact margins
  set page(
    paper: "us-letter",
    margin: (x: 0.5in, y: 0.45in),
  )

  // Configure text properties
  set text(
    font: "Ubuntu",
    size: 10pt,
    fill: rgb("#111827"), // Slate 900
    spacing: 120%,
  )

  // Header styling
  align(center)[
    #block(spacing: 6pt)[
      #text(size: 20pt, weight: "bold")[#name] \
      #v(2pt)
      #text(size: 11pt, weight: "medium", fill: rgb("#1e3a8a"))[#title]
    ]
    
    #text(size: 9pt, fill: rgb("#374151"))[
      #email #h(6pt) | #h(6pt)
      #phone #h(6pt) | #h(6pt)
      #link(website)[#website.replace("https://", "")] #h(6pt) | #h(6pt)
      #link(github)[#github.replace("https://", "")] #h(6pt) | #h(6pt)
      #link(linkedin)[#linkedin.replace("https://", "")]
    ]
  ]
  v(4pt)

  // Summary section (optional)
  if summary != "" [
    #v(4pt)
    #text(size: 9pt, style: "italic", fill: rgb("#374151"))[#summary]
    #v(4pt)
  ]

  // Headings styling
  show heading: it => [
    #v(6pt)
    #text(
      size: 11pt,
      weight: "bold",
      fill: rgb("#1e3a8a"), // Deep Blue
    )[#it.body.text]
    #v(1pt)
    #line(length: 100%, stroke: 0.75pt + rgb("#cbd5e1"))
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
      [*#role* \ #text(weight: "medium", fill: rgb("#374151"))[#company]],
      align(right)[*#date* \ #text(style: "italic", fill: rgb("#4b5563"), size: 9pt)[#location]]
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
      [*#degree* \ #text(weight: "medium", fill: rgb("#374151"))[#institution]],
      align(right)[*#date* \ #text(style: "italic", fill: rgb("#4b5563"), size: 9pt)[#location]]
    )
    #if gpa != "" [
      #v(-3pt)
      #text(size: 9pt)[GPA: #gpa]
    ]
    #if details.len() > 0 [
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
      [*#title* #h(5pt) #text(size: 8.5pt, fill: rgb("#4b5563"), weight: "regular")[(_#skills.join(", ")_)]],
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
