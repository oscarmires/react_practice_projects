import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

import PageContainer from "../components/PageContainer";
import ListContainer from "../components/List/ListContainer";
import ListElement from "../components/List/ListElement";

const Home = () => {
    return (
        <PageContainer>
            <h1 className="text-4xl font-bold mb-6">¡Hola!</h1>
            <div className="p-3 rounded-xl bg-gray-100 drop-shadow-xl">
                <h2 className="text-2xl p-3 font-bold">Cuentas</h2>
                <ListContainer>
                    <ListElement id={1} href="/acc">
                        <span className="font-bold">Base</span>
                        <span className="flex flex-row space-x-3">
                            <span>$10,000</span>{" "}
                            <ArrowRightCircleIcon className="size-6" />
                        </span>
                    </ListElement>
                    <ListElement id={2}>
                        <span className="font-bold">Inversión</span>
                        <span className="flex flex-row space-x-3">
                            <span>$10,000</span>{" "}
                            <ArrowRightCircleIcon className="size-6" />
                        </span>
                    </ListElement>
                </ListContainer>
            </div>
        </PageContainer>
    );
};

export default Home;
