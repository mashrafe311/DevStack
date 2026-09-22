    # Dev Stack Builder

Dev Stack is a modern developer technology stack builder website where users can explore different technologies and create their own personalized development stack.
Users can browse technologies by category, view technology details, add technologies to their stack, remove individual technologies, or clear the entire stack.


    # Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React-Toastify
- JSON
- HTML5
- CSS3


    #Features

1. Technology Explorer
Browse 15+ modern development technologies.
Filter technologies by category.
Technology data is loaded from a JSON file.
Each technology card shows:
- Technology icon
- Name
- Description
- Category
- Difficulty
- Rating
- Badge

2. Custom Developer Stack
Add technologies to your personal stack.
Prevents duplicate technologies from being added.
Remove individual technologies.
Remove all selected technologies at once.
Shows the total number of selected technologies.

3. Responsive Developer Interface
Fully responsive design for mobile, tablet, and desktop.
Responsive navigation with mobile menu.
Responsive technology card grid.
Sticky "Your Stack" sidebar on larger screens.
Uses a shared orange → pink → violet gradient theme.


    # React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript.It makes React components easier to read and write because we can describe the UI structure directly inside our JavaScript code.

Example:
function App() {
  return <h1>Hello React</h1>;
}

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.State is data managed inside a component that can change over time.

For example, in this project:
- technology is passed to TechnologyCard as a prop.
- selectedStack is stored as state in App.

Props are mainly used for passing data, while state is used for managing changing data.

3. What does the useState hook do, and where did you use it in this project?

useState allows a React component to store and update data.I used useState in several places.

For example, in App.jsx:
const [selectedStack, setSelectedStack] = useState([]);

This stores the technologies selected by the user.I also used useState for the active technology category and mobile navigation menu.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect allows us to perform side effects in a React component.I used useEffect in TechnologyGrid.jsx to fetch the technology data from the JSON file when the component loads.

useEffect(() => {
  const loadTechnologies = async () => {
    const response = await fetch("/data/technologies.json");
    const data = await response.json();

    setTechnologies(data);
  };

  loadTechnologies();
}, []);

The empty dependency array means the effect runs when the component is mounted.

5. Why does every item in a .map() list need a unique key prop?

React uses the key prop to identify individual items in a list.It helps React understand which items were added, removed, or changed.

For example:
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Here, technology.id provides a unique key for each technology.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.I used it for the empty stack state.

For example:
{selectedStack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <StackItems />
)}

When there are no selected technologies, the empty message is displayed.When technologies are selected, the stack items are displayed instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props.

For example:
<TechnologySection
  selectedStack={selectedStack}
  onAddToStack={handleAddToStack}
/>

Here, selectedStack and handleAddToStack are passed from the parent to the child.The child can send information back to the parent by calling a function received through props.

For example:
onAddToStack(technology);

This allows the parent component to update its state.