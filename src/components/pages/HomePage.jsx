import ContainerLayout from "../layouts/ContainerLayout";
import SpotifyPlayer from "../layouts/SpotifyPlayer"; // Certifique-se que o caminho está correto
import Carrossel from "../layouts/Carrossel";
import DiasJuntos from "../layouts/DiasJuntos";
import Mensagem from "../layouts/Mensagem";
import Capivara from "../layouts/Capivara";
import Temporizador from "../layouts/Temporizador";


function HomePage() {
    return (
        <ContainerLayout>
            <SpotifyPlayer />
            <Carrossel />
            <DiasJuntos tempoJuntos={"2 anos, 4 meses, 17 dias, 2 horas, 2 minutos e 26 segundos."} />
            <Temporizador />
            <Mensagem
                mensagem_p1={"Mais do que uma data, o Dia dos Namorados me faz lembrar o quanto sou feliz por ter você ao meu lado. Cada momento contigo, por mais simples que seja, se torna especial só por estar com você."}
                mensagem_p2={"Obrigado(a) por ser meu porto seguro, meu riso fácil e meu lugar favorito no mundo. Que a gente continue cultivando esse amor todos os dias."}
            />
            
            <Capivara />
        </ContainerLayout>
    );
}

export default HomePage;