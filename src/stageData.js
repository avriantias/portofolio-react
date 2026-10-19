export const stageData = {
  "1": {
    "title": "STAGE 01 // UI & RESPONSIVE LAYOUT",
    "heading": "Responsive Interface Foundations",
    "desc": "Shape flexible interfaces with HTML and CSS that adapt naturally from mobile screens to desktop layouts.",
    "code": "// Illustrative responsive layout\n<main className=\"grid grid-cols-1 gap-4 md:grid-cols-2\">\n  <section className=\"rounded-lg p-4\">\n    <h2>Project overview</h2>\n    <p>Content adapts to the available screen width.</p>\n  </section>\n</main>"
  },
  "2": {
    "title": "STAGE 02 // REUSABLE REACT COMPONENTS",
    "heading": "Components with Props",
    "desc": "Create reusable React components and pass the content they need through props.",
    "code": "// Illustrative reusable React component\nfunction ProjectCard({ title, description }) {\n  return (\n    <article>\n      <h2>{title}</h2>\n      <p>{description}</p>\n    </article>\n  )\n}"
  },
  "3": {
    "title": "STAGE 03 // REACT HOOKS & STATE",
    "heading": "Managing Component State",
    "desc": "Manage component state with useState and respond to side effects with useEffect.",
    "code": "// Illustrative React Hooks example\nimport { useState } from 'react'\n\nfunction QuantityControl() {\n  const [quantity, setQuantity] = useState(1)\n\n  return (\n    <button onClick={() => setQuantity((value) => value + 1)}>\n      Quantity: {quantity}\n    </button>\n  )\n}"
  },
  "4": {
    "title": "STAGE 04 // REST API & JSON",
    "heading": "Asynchronous API Integration",
    "desc": "Fetch data from RESTful APIs, handle asynchronous responses, and work with JSON data.",
    "code": "// Illustrative REST API request\nasync function loadItems() {\n  const response = await fetch('/api/items')\n\n  if (!response.ok) {\n    throw new Error('Unable to load items')\n  }\n\n  return response.json()\n}"
  },
  "flutter": {
    "title": "MOBILE APP DEVELOPMENT // FLUTTER",
    "heading": "Building Mobile Apps with Flutter",
    "desc": "Create cross-platform mobile interfaces with Flutter and Dart, organize feature state with BLoC, and connect app experiences through RESTful APIs.",
    "code": "// Illustrative BLoC state transition\non<LoadItems>((event, emit) async {\n  emit(ItemsLoading());\n  final items = await repository.fetchItems();\n  emit(ItemsLoaded(items));\n});"
  }
};
