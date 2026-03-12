import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import UserTable from "./UserTable";
import { redirect } from "next/navigation";

export default async function AdminToolsPage() {
  const session = await getServerSession(authOptions);

  // --- HIER DEINE WERTE EINTRAGEN (Wird später per API automatisiert) ---
  const usedStorage = 0.45; // In MB (z.B. 0.45 MB)
  const maxStorage = 500;   // In MB
  const usedCompute = 12.5; // In Stunden
  const maxCompute = 190;   // In Stunden

  // Berechnung der Prozentbalken
  const storagePercent = (usedStorage / maxStorage) * 100;
  const computePercent = (usedCompute / maxCompute) * 100;

  if (!session) {
    redirect("/login");
  }

  const ADMIN_ID = "cmmj98qgi0000rq24gmwmx125";
  const currentUserId = session.user?.id;

  if (currentUserId !== ADMIN_ID) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] bg-slate-50/50">
        <div className="p-10 text-center bg-white border border-slate-200 rounded-[2rem] shadow-2xl max-w-md">
          <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Stop!</h1>
          <p className="text-slate-500 mb-8 font-medium">Nur für Administratoren.</p>
          <div className="bg-slate-50 p-6 rounded-2xl mb-6 border border-slate-100">
            <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-2">Deine Session ID</p>
            <p className="font-mono text-xs text-slate-400 break-all select-all">{currentUserId || "Nicht identifiziert"}</p>
          </div>
        </div>
      </div>
    );
  }

  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true },
    orderBy: { name: 'asc' }
  });

  return (
    <div className="min-h-screen bg-slate-50/30">
      <div className="max-w-7xl mx-auto p-8 pt-16">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Database Live</span>
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
              Admin <span className="text-blue-600">Center</span>
            </h1>
          </div>
        </div>

        {/* NEONDB STATS KARTEN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* STORAGE CARD */}
          <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-xl shadow-slate-100/50">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">NeonDB Storage</p>
                <h3 className="text-3xl font-black text-slate-900">
                  {usedStorage} <span className="text-sm text-slate-400 font-bold ml-1">MB</span>
                </h3>
              </div>
              <div className="text-right text-slate-400 font-bold text-xs uppercase tracking-widest">
                Limit: {maxStorage} MB
              </div>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                style={{ width: `${storagePercent}%`, minWidth: '4px' }}
              ></div>
            </div>
            <p className="mt-4 text-[11px] text-slate-400 font-medium italic">Genutzt von deinem kostenlosen Kontingent.</p>
          </div>

          {/* COMPUTE CARD */}
          <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-xl shadow-slate-100/50">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">Compute Time</p>
                <h3 className="text-3xl font-black text-slate-900">
                  {usedCompute} <span className="text-sm text-slate-400 font-bold ml-1">h</span>
                </h3>
              </div>
              <div className="text-right text-slate-400 font-bold text-xs uppercase tracking-widest">
                Limit: {maxCompute} h
              </div>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-50">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-1000"
                style={{ width: `${computePercent}%`, minWidth: '4px' }}
              ></div>
            </div>
            <p className="mt-4 text-[11px] text-slate-400 font-medium italic">Stunden setzen sich monatlich zurück.</p>
          </div>
        </div>

        {/* USER TABELLE */}
        <div className="flex items-center gap-3 mb-6 ml-2">
            <p className="text-sm font-black uppercase tracking-widest text-slate-900">User List</p>
            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg text-[10px] font-black">{users.length} Users</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden mb-20">
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}
