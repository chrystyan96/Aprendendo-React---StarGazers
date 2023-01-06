import Welcome from './components/Welcome';
import Support from './components/Support';
import InicialList from './components/InicialList';

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name={name} />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <InicialList />
          <Support />
        </hgroup>
      </article>
    </div>
  )
}
export default App