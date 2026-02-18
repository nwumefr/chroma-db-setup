import PageSection from '../components/PageSection';

export default function AboutUs() {
  return (
    <PageSection
      title="About Us"
      breadcrumbs={[{ label: 'About Us', path: '/about-us' }, { label: 'Mission & History' }]}
    >
      <div className="prose">
        <h2>Our Mission and Vision</h2>
        <p>
          Ronald McDonald House Charities® (RMHC) of the Philadelphia Region supports families on their children's medical journeys with a community of comfort and hope. We envision a world where every family can focus on their child's well-being.
        </p>

        <h2>Core Programs</h2>
        <p>
          Our two Ronald McDonald House® programs provide temporary lodging, transportation, meals, and social services to families who travel to Philadelphia for pediatric care. Our three Ronald McDonald Family Room® programs extend the support of our Houses into the hospital setting and offer a quiet respite space for families at Children's Hospital of Philadelphia and St. Christopher's Hospital for Children. Ronald McDonald Camp is a week-long overnight camp for children with cancer and their siblings held in the Pocono Mountains every August. The Ronald McDonald Care Mobile®, operated in partnership with St. Christopher's Foundation for Children, provides comprehensive and continuous oral healthcare to children in North Philadelphia.
        </p>
        <p>
          Proceeds from donations made at local McDonald's restaurants make up less than 6% of our annual revenue. The remainder of our multi-million dollar budget is generated through the generosity of individuals, corporations, and foundations. It costs RMHC of the Philadelphia Region over $200 a night per family to provide housing and supportive services; however, families are only asked to contribute $25 per night. No one is ever turned away due to inability to pay and the House waives approximately half the nightly fees annually.
        </p>
        <p>
          <a href="/about-us/our-impact">Click here to read more about each program.</a>
        </p>

        <h2>History</h2>
        <p>
          Working as a pediatric oncologist at the Children's Hospital of Philadelphia in the 1970s, Dr. Audrey E. Evans saw families spend night after night in the hospital while their children received life-saving medical treatment. She knew there had to be a better way and envisioned a house where families could stay during these stressful and uncertain times.
        </p>
        <p>
          At the same time, the Philadelphia Eagles were raising funds in support of player Fred Hill, whose daughter, Kim, was in treatment for leukemia at St. Christopher's Hospital for Children. When Eagles' General Manager Jimmy Murray approached St. Christopher's about making a donation, Dr. Lawrence Naiman suggested there was an even greater need for funds resting with Dr. Evans. Mr. Murray met Dr. Evans and became a champion for her cause. He approached Don Tuckerman and Stanley Elkman of Elkman Advertising, which represented McDonald's, with the idea that the company could offer the proceeds from their Shamrock Shake sales to benefit this new house. McDonald's agreed, and the first Ronald McDonald House was born in Philadelphia on October 15, 1974.
        </p>
        <p>
          Thanks to the generosity of dedicated donors, the Ronald McDonald House has grown from a single idea to the model for over 375 Houses worldwide. The Chestnut Street House is located in a historic mansion which was expanded in 1995 and again in 2019 with the addition of the Jill and Alan B. Miller Tower which more than doubled its capacity. This House accommodates 127 families each night. Our second House opened in 2008 at the corner of Front Street and Erie Avenue, and accommodates 20 families each night. Beyond the walls of our Houses, we serve children and families through three Ronald McDonald Family Rooms, a Ronald McDonald Care Mobile, and Ronald McDonald Camp which began offering an integrated camp experience for children with cancer and their siblings in 1986.
        </p>
      </div>
    </PageSection>
  );
}
