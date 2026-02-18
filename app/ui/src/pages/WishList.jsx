import PageSection from '../components/PageSection';

export default function WishList() {
  return (
    <PageSection
      title="Donate to Our Wish List"
      breadcrumbs={[]}
    >
      <div className="prose">
        <p>
          You can support our families by purchasing items from our wish list and having them shipped directly to the House, or by delivering items in person.
        </p>
        <p>
          <a href="https://rmhcphilly.org/wishlist/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Shop and ship items to the House</a>
        </p>
        <p id="deliver">
          <a href="https://dockoptimizer.com/book/ronald-mcdonald-house-philly" target="_blank" rel="noopener noreferrer">Click here if you'd like to deliver items to the House.</a>
        </p>
        <p>
          <a href="/shop">Shop RMHC Philly Merchandise</a>
        </p>
      </div>
    </PageSection>
  );
}
