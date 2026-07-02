#let resume(
  name: "",
  title: "",
  email: "",
  phone: "",
  website: "",
  github: "",
  linkedin: "",
  summary: "", // summary parameter kept for signature compatibility
  body
) = {
  // Page setup - US Letter with professional compact margins
  set page(
    paper: "us-letter",
    margin: (x: 0.5in, y: 0.3in),
  )

  // Configure text properties
  set text(
    font: "Adobe Garamond Pro",
    size: 10pt,
    fill: rgb("#0f172a"), // Slate 900
  )
  
  // Configure paragraph properties
  set par(
    leading: 0.58em,
    justify: true,
  )

  // Configure list properties
  set list(
    marker: ([•],),
    body-indent: 5pt,
    indent: 8pt,
  )

  // Header styling
  align(center)[
    #block(spacing: 2pt)[
      #text(size: 18pt, weight: "bold", tracking: 0.5pt)[#name] \
      #v(1pt)
      #text(size: 10pt, weight: "medium", fill: rgb("#1e3a8a"), tracking: 0.25pt)[#title]
    ]
    #v(1pt)
    
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
  v(2pt)

  // Headings styling
  show heading: it => [
    #v(4pt)
    #text(
      size: 11pt,
      weight: "bold",
      fill: rgb("#1e3a8a"), // Deep Blue
    )[#it.body]
    #v(1pt)
    #line(length: 100%, stroke: 0.4pt + rgb("#cbd5e1"))
    #v(2pt)
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
  block(width: 100%, spacing: 4pt)[
    #strong(company) #box(width: 1fr) #strong(location) \
    #v(1pt)
    #emph(role) #box(width: 1fr) #date
    #v(1pt)
    #list(
      tight: true,
      spacing: 3pt,
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
  block(width: 100%, spacing: 4pt)[
    #strong(institution) #box(width: 1fr) #strong(location) \
    #v(1pt)
    #emph(degree) #box(width: 1fr) #date
    #if gpa != "" [
      #v(1pt)
      #text(size: 9.5pt)[GPA: #gpa]
    ]
    #if details.len() > 0 [
      #v(1pt)
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
  block(width: 100%, spacing: 4pt)[
    #strong(title) #h(4pt) | #h(4pt) #text(size: 8.5pt, fill: rgb("#475569"), weight: "regular")[#skills.join(" • ")] #box(width: 1fr) #strong(date)
    #v(1pt)
    #list(
      tight: true,
      spacing: 3pt,
      ..bullets.map(b => [#b])
    )
  ]
}

// Helper for skill categories
#let skill-category(
  category: "",
  items: ()
) = {
  block(width: 100%, spacing: 3pt)[
    #grid(
      columns: (130pt, 1fr),
      [*#category:*],
      [#items.join(", ")]
    )
  ]
}
