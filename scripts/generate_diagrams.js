import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'src', 'assets', 'diagrams');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const diagrams = [
  {
    id: 'neuro-symbolic-pipeline',
    title: 'Abductive Neuro-Symbolic Engine Pipeline',
    ariaLabel: 'Architecture diagram showing unstructured clinical narrative processed by LLM semantic extractor into Pydantic models, translated to SMT-LIB2 first-order logic assertions, and formally verified for satisfiability by Microsoft Z3 SMT Solver.',
    code: `flowchart LR
    A["Clinical Narrative<br/><i>(Unstructured Text)</i>"] --> B["LLM Agent<br/><i>(Semantic Extraction)</i>"]
    B --> C["Pydantic Schema<br/><i>(Typed Formal Assertions)</i>"]
    C --> D["SMT-LIB2 Generator<br/><i>(First-Order Logic)</i>"]
    D --> E["Microsoft Z3<br/><i>(SMT Solver Engine)</i>"]
    E --> F{"SAT Check"}
    F -- "SAT" --> G["Verified Safe Plan"]
    F -- "UNSAT" --> H["Contraindication Alert"]`
  },
  {
    id: 'cardiorenal-thesis-architecture',
    title: 'Cardiorenal-Metabolic Guideline Formalization Architecture',
    ariaLabel: 'Architecture diagram showing extraction of clinical rules from KDIGO, ADA, and ACC guidelines, modeling multimorbidity patient state as first-order predicates, and verifying polypharmacy guideline satisfiability using Z3 SMT solver.',
    code: `flowchart TD
    subgraph G1 ["Guideline Knowledge Bases"]
      KDIGO["KDIGO: CKD Protocols"]
      ADA["ADA: T2D Regimens"]
      ACC["ACC/AHA: Cardiovascular"]
    end
    subgraph G2 ["Formalization Engine"]
      FOL["First-Order Predicate Encoding"]
      PSTATE["Patient Multimorbidity State<br/>(eGFR, HbA1c, Serum K+)"]
    end
    subgraph G3 ["Automated SMT Verification"]
      Z3["Microsoft Z3 SMT Solver"]
      CHECK{"Consistency Check"}
      UNSAT["Contraindication Conflict Detected"]
      SAT["Valid Treatment Path Confirmed"]
    end
    KDIGO --> FOL
    ADA --> FOL
    ACC --> FOL
    FOL --> Z3
    PSTATE --> Z3
    Z3 --> CHECK
    CHECK -- "UNSAT" --> UNSAT
    CHECK -- "SAT" --> SAT`
  },
  {
    id: 'opengl-simulation-architecture',
    title: '911 OpenGL Commemorative Simulation Graphics Pipeline',
    ariaLabel: 'Graphics rendering pipeline architecture from C++ core and GLFW window context through vertex transformation shaders to double-buffered 60fps framebuffer output.',
    code: `flowchart LR
    INPUT["User Navigation & Camera"] --> STATE["Scene Graph State Matrix"]
    STATE --> VBO["Vertex Buffer Objects (VBO)"]
    VBO --> SHADER["GLSL Shaders (Vertex & Fragment)"]
    SHADER --> RAST["Rasterization & Depth Buffer"]
    RAST --> BUF["Double Framebuffer (SwapBuffers)"]
    BUF --> SCREEN["60fps Frame Display (GLFW)"]`
  },
  {
    id: 'js-compiler-architecture',
    title: 'Diu Shagoto IDE & Mini-Compiler Pipeline',
    ariaLabel: 'Compiler pipeline diagram showing source code lexing into token stream, recursive descent parser generating abstract syntax tree, semantic validation, and browser sandbox execution.',
    code: `flowchart LR
    SRC["Source Code Input"] --> LEX["Lexical Analyzer (Tokenizer)"]
    LEX --> TOK["Token Stream"]
    TOK --> PARSER["Recursive Descent Parser"]
    PARSER --> AST["Abstract Syntax Tree (AST)"]
    AST --> EVAL["Interpreter & Sandbox Runtime"]
    EVAL --> DIAG["Deterministic Output & Diagnostics"]`
  },
  {
    id: 'java-ridesharing-architecture',
    title: 'DIU Everywhere Desktop Ride-Sharing Architecture',
    ariaLabel: 'Software architecture of Java Swing ride-sharing desktop application showing Event Dispatch Thread UI decoupled from background database workers and SQL transactions.',
    code: `flowchart LR
    USER["Driver / Commuter UI"] --> EDT["Java Swing EDT (View Layer)"]
    EDT --> WORKER["SwingWorker Asynchronous Threads"]
    WORKER --> DAO["Data Access Object (JDBC)"]
    DAO --> DB[("Relational SQL Database<br/>(ACID Transactions)")]
    DB --> DAO
    DAO --> EDT`
  },
  {
    id: 'headless-ubuntu-architecture',
    title: 'Headless Ubuntu Node via Tailscale Mesh Network',
    ariaLabel: 'Network infrastructure architecture showing client terminal connecting through encrypted WireGuard Tailscale mesh network to headless Ubuntu server running systemd services and docker containers.',
    code: `flowchart LR
    CLIENT["Client Terminal (Laptop / SSH)"] --> MESH["Tailscale WireGuard Mesh VPN"]
    MESH --> HOST["Headless Ubuntu Server Host"]
    subgraph Services ["Server Compute Subsystems"]
      SSHD["OpenSSH Service (Key-Only)"]
      SYSTEMD["systemd Service Units"]
      DOCKER["Docker Engine Containers"]
      ARIA["aria2 / Motrix Storage Daemon"]
    end
    HOST --> SSHD
    HOST --> SYSTEMD
    HOST --> DOCKER
    HOST --> ARIA`
  }
];

const mermaidJsPath = path.join(rootDir, 'scripts', 'mermaid.min.js');
const mermaidJs = fs.readFileSync(mermaidJsPath, 'utf8');

for (const d of diagrams) {
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script>${mermaidJs}</script>
  <style>
    body {
      background-color: transparent;
      color: #141414;
      font-family: 'JetBrains Mono', monospace;
      margin: 0;
      padding: 16px;
    }
    .node rect, .node circle, .node ellipse, .node polygon, .node path {
      fill: #FFFFFF !important;
      stroke: #D1D5DB !important;
      stroke-width: 1px !important;
      rx: 2px !important;
      ry: 2px !important;
    }
    .node.statediagram-state rect {
      rx: 2px !important;
      ry: 2px !important;
    }
    .cluster rect {
      fill: #F9FAFB !important;
      stroke: #E5E7EB !important;
      stroke-width: 1px !important;
      rx: 2px !important;
      ry: 2px !important;
    }
    .edgePath .path {
      stroke: #4B5563 !important;
      stroke-width: 1.25px !important;
    }
    .arrowheadPath {
      fill: #4B5563 !important;
      stroke: #4B5563 !important;
    }
    .label, .node .label {
      color: #111827 !important;
      font-family: 'JetBrains Mono', monospace !important;
      font-size: 12px !important;
      font-weight: 500 !important;
    }
    .edgeLabel {
      background-color: #FFFFFF !important;
      color: #1F2937 !important;
      font-family: 'JetBrains Mono', monospace !important;
      font-size: 11px !important;
      padding: 2px 6px !important;
      border: 1px solid #E5E7EB !important;
      border-radius: 2px !important;
    }
  </style>
</head>
<body>
  <div id="container" class="mermaid">
${d.code}
  </div>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        darkMode: false,
        background: '#FFFFFF',
        primaryColor: '#FFFFFF',
        primaryBorderColor: '#D1D5DB',
        primaryTextColor: '#111827',
        lineColor: '#4B5563',
        textColor: '#111827',
        edgeLabelBackground: '#FFFFFF',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px'
      }
    });
  </script>
</body>
</html>`;

  const tempHtmlPath = path.join(rootDir, 'scripts', `temp_${d.id}.html`);
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  try {
    const rawDom = execFileSync('/usr/bin/google-chrome', [
      '--headless',
      '--disable-gpu',
      '--virtual-time-budget=2500',
      '--dump-dom',
      tempHtmlPath
    ], { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });

    // Extract the rendered SVG element
    const svgMatch = rawDom.match(/<svg id="mermaid-[^"]*"[\s\S]*?<\/svg>/i);
    if (!svgMatch) {
      console.error(`Failed to extract SVG for ${d.id}`);
      continue;
    }

    let svg = svgMatch[0];

    // Inject accessibility aria-label and role into the svg
    svg = svg.replace(/<svg([^>]*)>/, `<svg$1 role="img" aria-label="${d.ariaLabel}">\n<title>${d.title}</title>`);

    // Clean subtle borders
    svg = svg.replace(/rx="\d+"/g, 'rx="2"').replace(/ry="\d+"/g, 'ry="2"');

    const destPath = path.join(outputDir, `${d.id}.svg`);
    fs.writeFileSync(destPath, svg, 'utf8');
    console.log(`Rendered: ${d.id}.svg`);
  } catch (err) {
    console.error(`Error rendering ${d.id}:`, err);
  } finally {
    if (fs.existsSync(tempHtmlPath)) {
      fs.unlinkSync(tempHtmlPath);
    }
  }
}

console.log('Diagram generation complete.');
