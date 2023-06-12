import Jumbotron from "../components/cards/Jumbotron";
import { useAuth } from "../context/auth";

export default function Home() {
    const [auth, setAuth] = useAuth();

    return (
        <div>
            <Jumbotron title="CyberSilver Store - Bạc Thái & Vàng phong thủy"/>
            <pre>{JSON.stringify(auth, null, 4)}</pre>

        </div>
    );
}
