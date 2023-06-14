import {Link} from "react-router-dom";
import {Button} from '@mantine/core';

export default function HomePage() {
    return (
        <>
            <div>
                Home page
            </div>


            <Link
                to={"/login"}
            >
                <Button>

                    Login
                </Button>
            </Link>

        </>
    )
}