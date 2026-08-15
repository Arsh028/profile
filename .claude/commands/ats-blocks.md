---
description: Generate LaTeX invisible ATS keyword blocks from a job description
---

# ATS Keyword Blocks Generator

Generate LaTeX invisible ATS keyword blocks tailored to a job description.

## Instructions

The user will paste a job description. You must:

1. Extract all ATS-relevant keywords, skills, tools, concepts, and domain terms from the JD
2. First check Arsh's profile (CLAUDE.md) for matching keywords and experience — always pull from real profile first. Then include every remaining keyword, phrase, tool, or concept from the JD regardless of whether it appears in the profile. The goal is 100% keyword coverage of the JD — no JD term should be left out of the blocks. These are invisible ATS blocks so complete JD coverage is the priority.
3. Distribute keywords across the 8 fixed LaTeX blocks below — each block has a hard character budget for its text content
4. Output the complete ready-to-paste LaTeX code

## The 8 Fixed Block Positions

These coordinates are FIXED — never change the `\put(x,y)` values or the `\dimexpr` values. Only change the keyword text inside.

| Block | \put coords | parbox width expression | Approx chars/line | Purpose |
|---|---|---|---|---|
| A | (5, 20) | \paperwidth - 20pt | ~120 | Bottom of page — general engineering/domain terms |
| B | (5, 820) | \paperwidth - 20pt | ~120 | Top of page — core role keywords |
| C | (225, 770) | \paperwidth - 230pt | ~76 | Top right area — product/strategy terms |
| D | (106, 690) | \paperwidth - 150pt | ~93 | Upper body — API/security/web terms |
| E | (106, 90) | \paperwidth - 150pt | ~93 | Lower body — tech stack terms |
| F | (155, 210) | \paperwidth - 160pt | ~91 | Lower mid — ownership/delivery terms |
| G | (155, 360) | \paperwidth - 160pt | ~91 | Mid — craft/quality terms |
| H | (155, 530) | \paperwidth - 160pt | ~91 | Upper mid — product/company culture terms |

## Character Budget Rules

Each block is a single `\parbox` at 8pt font. Text wraps automatically. To avoid vertical overlap between adjacent blocks, keep total text per block under the following character counts (these include commas and spaces):

- Block A (y=20): max ~500 chars (safe gap to Block E at y=90)
- Block E (y=90): max ~400 chars (safe gap to Block F at y=210)
- Block F (y=210): max ~400 chars (safe gap to Block G at y=360)
- Block G (y=360): max ~400 chars (safe gap to Block H at y=530)
- Block H (y=530): max ~400 chars (safe gap to Block D at y=690)
- Block D (y=690): max ~300 chars (safe gap to Block C at y=770)
- Block C (y=770): max ~200 chars (safe gap to Block B at y=820)
- Block B (y=820): max ~500 chars (within top margin)

## Keyword Distribution Strategy

Distribute extracted keywords across the blocks, respecting each block's character budget. No thematic grouping required — fill each block up to its limit with as many JD keywords as possible, then continue into the next block.

**Stop when coverage is complete.** Once all JD keywords are placed, stop — do NOT replace remaining blocks. Only output the blocks that need to change; tell the user which block numbers to replace and leave the rest of the existing resume blocks untouched.

## Output Format

Output ONLY the raw LaTeX code blocks, no explanation. Use this exact template structure:

```latex
\AddToShipoutPictureBG*{
  \put(5,20){\parbox{\dimexpr\paperwidth - 20pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK A KEYWORDS]
  }}
}

\AddToShipoutPictureBG*{
  \put(5,820){\parbox{\dimexpr\paperwidth - 20pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK B KEYWORDS]
  }}
}

\AddToShipoutPictureBG*{
  \put(225,770){\parbox{\dimexpr\paperwidth - 230pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK C KEYWORDS]
  }}
}

\AddToShipoutPictureBG*{
  \put(106,690){\parbox{\dimexpr\paperwidth - 150pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK D KEYWORDS]
  }}
}

\AddToShipoutPictureBG*{
  \put(106,90){\parbox{\dimexpr\paperwidth - 150pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK E KEYWORDS]
  }}
}

\AddToShipoutPictureBG*{
  \put(155,210){\parbox{\dimexpr\paperwidth - 160pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK F KEYWORDS]
  }}
}

\AddToShipoutPictureBG*{
  \put(155,360){\parbox{\dimexpr\paperwidth - 160pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK G KEYWORDS]
  }}
}

\AddToShipoutPictureBG*{
  \put(155,530){\parbox{\dimexpr\paperwidth - 160pt\relax}{\color{white}\fontsize{8pt}{8pt}\selectfont
[BLOCK H KEYWORDS]
  }}
}
```

Keywords should be comma-separated natural phrases, not just single words. Vary phrasing (e.g. both "Distributed Systems" and "Distributed Architecture"). Do not repeat the same term across blocks.
