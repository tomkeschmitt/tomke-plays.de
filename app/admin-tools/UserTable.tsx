"use client";

interface User {
  id: string;
  name: string | null;
  email: string | null;
}

export default function UserTable({ users }: { users: User[] }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">User-ID</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Name</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">E-Mail Adresse</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {users.length === 0 ? (
            <tr>
              <td colSpan={3} className="px-6 py-10 text-center text-slate-400 italic">
                Keine Benutzer in der Datenbank gefunden.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-mono text-[10px] text-slate-400">
                  {user.id}
                </td>
                <td className="px-6 py-4 font-semibold text-slate-800">
                  {user.name || "Unbekannt"}
                </td>
                <td className="px-6 py-4 text-blue-600 font-medium">
                  {user.email}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
