/* ─── Reduced Motion Check ─── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── Data ─── */
const ACADEMIC_DATA = [
  {
    title: "IGCSE",
    status: "completed",
    period: "2023\u20132025",
    label: "SUBJECTS COMPLETED",
    subjects: [
      { name: "Biology",          icon: "check" },
      { name: "Chemistry",        icon: "check" },
      { name: "Physics",          icon: "check" },
      { name: "Combined Science", icon: "check" },
      { name: "Mathematics",      icon: "check" }
    ]
  },
  {
    title: "A-Levels",
    status: "in_progress",
    period: "2025\u2013Present",
    label: "CURRENT SUBJECTS",
    subjects: [
      { name: "Biology A-Level",   icon: "hourglass" },
      { name: "Chemistry A-Level", icon: "flask"     }
    ]
  }
];

const UPDATES_DATA = [
  {
    title: "Portfolio Remake",
    content: "Claude Opus 4.7 released, so I supposed to build this portfolio by Emergent, and this was a very good result for me. Literally rebuilded the whole site, better than Sonnet 4.6 like before. Tuff head page though.",
    description: "Major portfolio rework \u2014 cleaner structure, new sections, better mobile layout.",
    time: "21:00:00 19/04/2026"
  },
  {
    title: "Successfully verified domain",
    content: "I have finally done verifying https://astear17.sino.tw on GitHub (still sad because no Vercel ToT). Big thanks to Mint1 for promoting FreeDNS domain and help me setting things up for GitHub Pages.",
    description: "Finally verified https://astear17.sino.tw",
    time: "17:12:02 18/04/2026"
  },
  {
    title: "Final for VN Cybersecurity",
    content: "So shocked, I have officially enrolled to be 3rd rank of Gia Lai to be in the 'Secondary School Students with Cybersecurity' contest. I am very proud from the time I was writing this.",
    description: "Staying 3rd rank in 'Secondary School Students with Cybersecurity' contest",
    time: "13:24:31 16/04/2026"
  },
  {
    title: "1st of Gia Lai Province for VN Cybersecurity",
    content: "Mind you but I have done my final for 19/24 with 6 mins and being the 1st rank of Gia Lai Province. There might be a high chance that I should be invited by NCA to go to Hanoi for free (self-prize). Currently I already have a school and province prizes.",
    description: "Won 1st rank in 'Secondary School Students with Cybersecurity' contest at Province level",
    time: "22:41:09 20/04/2026"
  },
];

const HERO_TEXT = "A young tech enthusiast building tools for iOS, Android & webApps. Learning Python, HTML, JS, CSS & Pascal. Open-source projects, one vibe-coded commit at a time.";

/* ─── SVG Icon Sprites (injected into body) ─── */
const SVG_SPRITE = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
<symbol id="icon-github" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></symbol>
<symbol id="icon-code" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></symbol>
<symbol id="icon-cloud" viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></symbol>
<symbol id="icon-globe" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></symbol>
<symbol id="icon-envelope" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></symbol>
<symbol id="icon-clock" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></symbol>
<symbol id="icon-check" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></symbol>
<symbol id="icon-hourglass" viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></symbol>
<symbol id="icon-flask" viewBox="0 0 24 24"><path d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"/></symbol>
<symbol id="icon-graduation" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></symbol>
<symbol id="icon-rotate" viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></symbol>
<symbol id="icon-python" viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></symbol>
<symbol id="icon-android" viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12c0-2.21-1.24-4.15-3.47-5.84zM10 5H9V4h1v1zm5 0h-1V4h1v1zm-5 4H9V7h1v1zm5 0h-1V7h1v1z"/></symbol>
<symbol id="icon-apple" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></symbol>
<symbol id="icon-react" viewBox="0 0 24 24"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/></symbol>
<symbol id="icon-discord" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></symbol>
<symbol id="icon-tiktok" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></symbol>
<symbol id="icon-facebook" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></symbol>
<symbol id="icon-instagram" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></symbol>
<symbol id="icon-youtube" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></symbol>
</svg>`;

/* ─── Utility ─── */
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]);
}

function svgIcon(id, cls) {
  return `<svg class="icon ${cls || ''}" aria-hidden="true"><use href="#${id}"/></svg>`;
}

/* ─── Inject SVG Sprite ─── */
(function injectSprite() {
  const tpl = document.createElement('div');
  tpl.innerHTML = SVG_SPRITE;
  document.body.prepend(tpl.firstChild);
})();

/* ─── Boot Screen ─── */
(function boot() {
  if (prefersReducedMotion) return;
  const log  = document.getElementById('boot-log');
  const el   = document.getElementById('boot');
  if (!el) return;
  const skip = el.querySelector('.boot-skip');
  if (sessionStorage.getItem('astear17.booted') === '1') { el.remove(); return; }
  const lines = [
    ['ok',   'BIOS POST ....................... OK'],
    ['dim',  'Probing CPU: xeon_E3-1225v3 @ 3,20 GHz'],
    ['ok',   'Loading kernel /boot/geekyOS_v1.1.0_x86-64.img .. OK'],
    ['ok',   'Mounting /dev/curiosity ........... OK'],
    ['ok',   'Mounting /dev/resources ........... OK'],
    ['warn', 'Checking /dev/sleep ............... MISSING (ignored)'],
    ['ok',   'Starting network: wlan0_PPPoE ..... OK'],
    ['dim',  'Resolving github.com .............. 140.82.121.4'],
    ['dim',  'Resolving freedns.afraid.com ...... 169.47.130.72'],
    ['ok',   'Loading modules: python, html, js, css'],
    ['ok',   'Spawning vibecoder daemon ......... [PID 3667]'],
    ['dim',  'Connecting to api.github.com ...... success'],
    ['white','astear17@guest:~$ ./portfolio --launch']
  ];
  const colorMap = { ok:'boot-ok', warn:'boot-warn', dim:'boot-dim', white:'boot-white' };
  function finish() {
    el.classList.add('done');
    sessionStorage.setItem('astear17.booted', '1');
    setTimeout(() => el.remove(), 600);
  }
  skip.addEventListener('click', finish);
  document.addEventListener('keydown', function onEsc(e){ if (e.key==='Escape'){ finish(); document.removeEventListener('keydown',onEsc); } });
  let i = 0;
  const iv = setInterval(() => {
    if (i >= lines.length) { clearInterval(iv); setTimeout(finish, 700); return; }
    const [kind, text] = lines[i++];
    const prefix = kind==='ok'?'[ OK ] ':kind==='warn'?'[WARN] ':kind==='white'?'':'       ';
    const div = document.createElement('div');
    div.className = colorMap[kind] || '';
    div.style.animationDelay = '0s';
    div.textContent = prefix + text;
    log.appendChild(div);
  }, 180);
})();

/* ─── Mouse Glow on Cards ─── */
(function mouseGlow() {
  if (prefersReducedMotion) return;
  document.addEventListener('mousemove', e => {
    document.querySelectorAll('.sk-card, .pj-card').forEach(card => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
    });
  });
})();

/* ─── Matrix Rain Canvas ─── */
function matrixRain(canvas, opts) {
  if (prefersReducedMotion) return;
  const ctx = canvas.getContext('2d');
  const cfg = Object.assign({ host: canvas, color: '#00ff80', fontSize: 14, step: 20, fade: .08, interval: 60 }, opts);
  let W, H, cols, drops;
  let running = true;
  let timerId = null;
  const ch = '01ABCDEF<>/_';
  function resize() {
    W = canvas.width  = cfg.host === window ? innerWidth  : (cfg.host.offsetWidth  || innerWidth);
    H = canvas.height = cfg.host === window ? innerHeight : (cfg.host.offsetHeight || innerHeight);
    cols = Math.floor(W / cfg.step);
    drops = Array(cols).fill(0).map(() => Math.floor(Math.random() * (H / cfg.step)));
  }
  resize();
  addEventListener('resize', resize);
  function tick() {
    ctx.fillStyle = `rgba(4,8,12,${cfg.fade})`;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = cfg.color;
    ctx.font = cfg.fontSize + 'px "Geist Mono", monospace';
    drops.forEach((y, idx) => {
      ctx.fillText(ch[Math.floor(Math.random() * ch.length)], idx * cfg.step, y * cfg.step);
      if (y * cfg.step > H && Math.random() > .975) drops[idx] = 0;
      drops[idx]++;
    });
  }
  function startLoop() {
    if (timerId) return;
    timerId = setInterval(tick, cfg.interval);
  }
  function stopLoop() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }
  startLoop();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopLoop(); running = false; }
    else { startLoop(); running = true; }
  });
}
matrixRain(document.getElementById('mc'),        { host: document.getElementById('hero'), step:20, fontSize:14, fade:.08, interval:60 });
matrixRain(document.getElementById('bg-matrix'), { host: window, step:22, fontSize:13, fade:.05, interval:85 });

/* ─── Clock ─── */
function updateClock() {
  const now = new Date();
  const timeOpts = { timeZone:'Asia/Ho_Chi_Minh', hour12:false, hour:'2-digit', minute:'2-digit', second:'2-digit' };
  const dateOpts = { timeZone:'Asia/Ho_Chi_Minh', weekday:'long', day:'2-digit', month:'short', year:'numeric' };
  const clockTime = document.getElementById('clock-time');
  const clockDate = document.getElementById('clock-date');
  if (clockTime) clockTime.textContent = new Intl.DateTimeFormat('en-GB', timeOpts).format(now);
  if (clockDate) clockDate.textContent = new Intl.DateTimeFormat('en-GB', dateOpts).format(now);
}
setInterval(updateClock, 1000); updateClock();

/* ─── Typewriter ─── */
let typeTimer = null;
function startTypewriter() {
  if (prefersReducedMotion) {
    const out = document.getElementById('typed');
    if (out) out.textContent = HERO_TEXT;
    return;
  }
  const out = document.getElementById('typed');
  if (!out) return;
  if (typeTimer) clearInterval(typeTimer);
  out.textContent = ''; let i = 0;
  typeTimer = setInterval(() => {
    out.textContent = HERO_TEXT.slice(0, i);
    if (++i > HERO_TEXT.length) clearInterval(typeTimer);
  }, 16);
}

/* ─── Fade-in Observer ─── */
function reveal(el) {
  el.classList.add('in');
  el.querySelectorAll('.sk-fill').forEach(b => { b.style.width = (b.dataset.w || 0) + '%'; });
}
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) reveal(e.target); });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

function check() {
  document.querySelectorAll('.fade').forEach(el => {
    if (!el.classList.contains('in')) {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight + 40) reveal(el);
    }
  });
}
function reObserve() {
  document.querySelectorAll('.fade').forEach(el => obs.observe(el));
  setTimeout(check, 50);
}

/* ─── Render Academic ─── */
function renderAcademic() {
  const grid = document.getElementById('academic-grid');
  if (!grid) return;
  const iconMap = { check: 'icon-check', hourglass: 'icon-hourglass', flask: 'icon-flask' };
  grid.innerHTML = ACADEMIC_DATA.map(item => {
    const done = item.status === 'completed';
    const chips = item.subjects.map(s =>
      `<span class="ac-chip ${done ? '' : 'ac-chip-prog'}">
        ${svgIcon(iconMap[s.icon] || 'icon-check', 'icon-sm')}${s.name}
      </span>`
    ).join('');
    return `
      <div class="ac-card fade">
        <div class="ac-card-top">
          <div class="ac-icon-wrap">
            <div class="ac-icon">${svgIcon('icon-graduation', 'icon-lg')}</div>
            <div class="ac-icon-badge ${done ? 'ac-badge-done' : 'ac-badge-prog'}">
              ${svgIcon(done ? 'icon-check' : 'icon-rotate', 'icon-sm')}
            </div>
          </div>
          <div class="ac-status-info">
            <span class="ac-status ${done ? 'ac-status-done' : 'ac-status-prog'}">
              ${done ? 'COMPLETED' : 'IN PROGRESS'}
            </span>
            <span class="ac-period">${item.period}</span>
          </div>
        </div>
        <h3 class="ac-title">${item.title}</h3>
        <div class="ac-label-row">
          <span class="ac-dot ${done ? '' : 'ac-dot-prog'}"></span>
          <span class="ac-label">${item.label}</span>
        </div>
        <div class="ac-subjects">${chips}</div>
      </div>`;
  }).join('');
  reObserve();
}

/* ─── Render Updates ─── */
function renderUpdates() {
  const grid = document.getElementById('updates-grid');
  if (!grid) return;
  if (!UPDATES_DATA.length) {
    grid.innerHTML = '<p class="upd-empty">No updates yet.</p>';
    return;
  }
  grid.innerHTML = [...UPDATES_DATA].reverse().map((item, i) => `
    <article class="upd-card fade">
      <div class="upd-card-head">
        <span class="upd-time">${svgIcon('icon-clock', 'icon-sm')} ${item.time} GMT+7</span>
        ${i === 0 ? '<span class="upd-new">NEW</span>' : ''}
      </div>
      <h3 class="upd-title">${item.title}</h3>
      <p class="upd-desc">${item.description}</p>
      ${item.content ? `<p class="upd-content">${item.content}</p>` : ''}
    </article>`
  ).join('');
  reObserve();
}

renderAcademic();
renderUpdates();

document.querySelectorAll('.fade').forEach((el, idx) => {
  el.style.transitionDelay = (idx % 6 * 0.07) + 's';
  obs.observe(el);
});
check();
setTimeout(check, 150);

/* ─── GitHub Stats (lazy via IntersectionObserver) ─── */
(function lazyGithubStats() {
  const cards = document.querySelectorAll('.gh-card img[data-src]');
  if (!cards.length) return;
  const imgObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.onerror = function() {
          const fb = document.createElement('div');
          fb.className = 'gh-fallback';
          fb.textContent = 'Stats temporarily unavailable';
          this.replaceWith(fb);
        };
        imgObs.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });
  cards.forEach(img => imgObs.observe(img));
})();

/* ─── GitHub User Stats ─── */
(async function loadGithubStats() {
  try {
    const r = await fetch('https://api.github.com/users/Astear17');
    if (!r.ok) return;
    const d = await r.json();
    const repos = document.getElementById('stat-repos');
    const fol   = document.getElementById('stat-followers');
    if (repos && d.public_repos != null) repos.textContent = d.public_repos;
    if (fol   && d.followers   != null) fol.textContent   = d.followers;
  } catch(e) {}
})();

/* ─── Mobile Nav Toggle ─── */
(function mobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    });
  });
})();

/* ─── Easter Egg ─── */
(function clickEgg() {
  const termBar = document.getElementById('term-bar');
  const toast   = document.getElementById('egg-toast');
  const modal   = document.getElementById('easter');
  const body    = document.getElementById('easter-body');
  const closeBtn = document.getElementById('easter-close');
  if (!termBar || !modal) return;
  const TOTAL = 10;
  let clicks = 0;
  let toastTimer = null;

  const script = [
    { txt: 'astear17@root:~# sudo rm -rf /',          color: 't-c',  delay: 600 },
    { txt: '[sudo] password for astear17: ',          color: 't-dim',delay: 900 },
    { txt: "rm: cannot remove '/':",                  color: 't-c',  delay: 450 },
    { txt: 'Operation not permitted. Access denied.', color: 't-s',  delay: 700 },
    { txt: 'ldr devices',                             color: 't-dim',delay: 200 },
    { txt: '\u21b3 localhost',      color: 't-k',  delay: 600 },
    { txt: 'astear17@root:~# sudo mqsas.IMQSNative --no-preserve',          color: 't-c',delay: 1500 },
    { txt: 'Waiting for localhost:5555',              color: 't-k',delay: 2000 },
    { txt: '\u21b3 connected to localhost. Performing actions.',      color: 't-k',  delay: 600 },
    { txt: '\u21b3 You have successfully turned on Developer Mode.',        color: 't-k',  delay: 500 },
    { txt: '',                                         color: 't-dim',delay: 200 },
    { txt: 'astear17@root:~# whoami',                  color: 't-c',  delay: 500 },
    { txt: 'a vibecoder who should be sleeping.',      color: 't-v',  delay: 700 },
    { txt: '',                                         color: 't-dim',delay: 200 },
    { txt: 'astear17@root:~# echo "thanks for visiting \u2665"', color:'t-c', delay: 500 },
    { txt: 'thanks for visiting \u2665',                    color: 't-s',  delay: 500 },
    { txt: '', color: 't-dim', delay: 200 },
    { cursor: true, delay: 0 }
  ];

  function playScript() {
    body.innerHTML = '';
    let acc = 0;
    script.forEach(step => {
      acc += step.delay;
      setTimeout(() => {
        const d = document.createElement('div');
        d.className = 'line';
        if (step.cursor) {
          d.innerHTML = '<span class="t-p">astear17@root:~# </span><span class="t-cur"></span>';
        } else {
          d.innerHTML = `<span class="${step.color}">${escapeHtml(step.txt)}</span>`;
        }
        body.appendChild(d);
      }, acc);
    });
  }

  function openModal() {
    modal.classList.add('open');
    playScript();
    closeBtn && closeBtn.focus();
  }
  function closeModal() { modal.classList.remove('open'); termBar.focus(); }

  function showToast(remaining) {
    toast.textContent = `Press ${remaining} more time${remaining !== 1 ? 's' : ''} to enter developer mode`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      clicks = 0;
    }, 3500);
  }

  termBar.addEventListener('click', () => {
    clicks++;
    if (clicks >= TOTAL) {
      clicks = 0;
      toast.classList.remove('show');
      clearTimeout(toastTimer);
      openModal();
    } else if (clicks >= 3) {
      showToast(TOTAL - clicks);
    }
  });

  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
})();

/* ─── Start ─── */
startTypewriter();
