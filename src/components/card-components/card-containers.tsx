import Card from './card';

const CardContainers: React.FC = () => {
    return (
        <section>
            <section>
                <article>
                    <Card index="LFT" />
                    <Card index="SAE" />
                    <Card index="IIM" />
                </article>
            </section>

            <section className="card-top-gap">
                <article>
                    <Card index="Parkours" />
                    <Card index="Malt" />
                    <Card index="TKA" />
                </article>
            </section>
        </section>

    );
}

export default CardContainers;