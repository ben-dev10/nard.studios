# nard.studios notes

## Avoiding `z-index` conflicts

Some basic layering conventions are necessary to avoid `z-index` conflicts in an application when using CSS `positioning` methods, i.e `relative`, `absolute`, `fixed` & `sticky`.

#### Rules

1. Primary z values: `1-5`  
   For general page items - elements, surfaces and low level action buttons

2. Secondary z values: `10 - 50`  
   For top level elements: sheets, navbars

3. Tertiary z values: `>=50`  
   For overlays and full-screen components: i.e lightboxes
