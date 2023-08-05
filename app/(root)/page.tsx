//app/page.tsx
import { UserButton } from '@clerk/nextjs';
import { ClerkProvider } from '@clerk/nextjs/app-beta';

export default function Home() {
    return (
        <ClerkProvider>
            <UserButton afterSignOutUrl='/' />
        </ClerkProvider>
    );
}
