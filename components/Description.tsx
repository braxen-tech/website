import Image from 'next/image';

export default function Description() {
  return (
    <section  className="py-24 px-6 mx-auto relative min-h-screen flex flex-col sm:flex-row items-center justify-center overflow-hidden">
      {/* Background decoration */}

      <div className="w-full h-full z-0 overflow-hidden flex items-center justify-end">
      <Image src="/boy-future.png" alt="Braxen" height={950}  width={550} className="object-cover" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-7xl font-bold mb-6">Soluções que te impulsionam para o <span className='text-secondary'>FUTURO.</span></h2>
          <p className="text-gray-400 max-w-3xl text-lg mb-6">
          A Braxen não é apenas uma fornecedora de serviços; somos a sua parceira estratégica dedicada a impulsionar o crescimento e a evolução do seu negócio.
          </p>
          <p className="text-gray-400 max-w-3xl text-lg">
          Nosso compromisso fundamental é resolver problemas e entregar soluções concretas e eficazes para os desafios que a sua empresa enfrenta.
          </p>
        </div>


      </div>
    </section>
  );
}
