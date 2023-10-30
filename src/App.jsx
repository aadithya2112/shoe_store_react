import { Hero, PopularProducts, Footer } from './sections';

const App = () => (
  <main className="relative">
    <section className="x1:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);


export default App;