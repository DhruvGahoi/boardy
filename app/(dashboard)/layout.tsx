import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Sidebar } from "./_components/sidebar";

interface DashBoardLayoutProps {
    children : React.ReactNode
}

const DashboardLayout = ({
    children,
}: DashBoardLayoutProps) => {
    return(
        <main className="h-screen">
            <Sidebar />
            <div className="pl-[60px] h-screen">
                <div className="flex gap-x-3 h-screen">
                    <OrgSidebar />
                    <div className="h-screen flex-1">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default DashboardLayout;