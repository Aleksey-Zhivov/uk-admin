import { useMemo, useState } from "react";
import type { TabKey } from "./types/tabs";
import { HOUSES } from "./data/objects";
import { TABS } from "./data/tabs";
import ObjectsTab from "./components/object-tab/object-tab";
import RequestsTab from "./components/request-tab/request-tab";
import EmployeesTab from "./components/employees-tab/employees-tab";
import MyCabinetTab from "./components/my-cabinet-tab/my-cabinet-tab";
import ResidentPortalTab from "./components/resident-portal-tab/resident-portal-tab";

export default function App() {
  const [tab, setTab] = useState<TabKey>("objects");
  const [query, setQuery] = useState("");
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
  const [reqStatus, setReqStatus] = useState<string>("");
  const activeHouse = useMemo(
    () => HOUSES.find((h) => h.id === selectedHouse) || null,
    [selectedHouse]
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-xl bg-blue-600" />
              <span className="hidden text-sm font-semibold text-slate-600 sm:inline">
                УК: админ-панель
              </span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={
                    "rounded-lg px-3 py-1.5 text-sm transition " +
                    (tab === t.key
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100")
                  }
                >
                  {t.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <input
                placeholder="Поиск…"
                className="w-40 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300 sm:w-64"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="size-9 rounded-lg border border-slate-200 bg-white" />
            </div>
          </div>
        </div>
        {/* Mobile tabs */}
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-3 pb-2 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={
                    "whitespace-nowrap rounded-lg px-3 py-1.5 text-sm " +
                    (tab === t.key
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 border border-slate-200")
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-6 lg:px-8">
        {tab === "objects" && (
          <ObjectsTab
            query={query}
            onOpenHouse={setSelectedHouse}
            activeHouse={activeHouse}
            onCloseDetail={() => setSelectedHouse(null)}
          />
        )}
        {tab === "requests" && (
          <RequestsTab reqStatus={reqStatus} setReqStatus={setReqStatus} />
        )}
        {tab === "employees" && <EmployeesTab />}
        {tab === "my" && <MyCabinetTab />}
        {tab === "resident" && <ResidentPortalTab />}
      </main>
    </div>
  );
}
