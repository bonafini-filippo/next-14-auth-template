'use client'

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";


const ClientPage = async () => {
    const user = useCurrentUser();
    return (
        <div>
            <UserInfo
                user={user}
                label="📱 Client Component"
            />
        </div>
    );
};

export default ClientPage;