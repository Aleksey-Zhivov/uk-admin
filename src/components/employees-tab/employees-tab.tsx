import { useState, useMemo } from "react";
import { EMPLOYEES } from "src/data/employes.constant";
import Td from "../ui/td/td";
import Th from "../ui/th/th";

const EmployeesTab = () => {
  const [q, setQ] = useState("");
  const rows = useMemo(
    () =>
      EMPLOYEES.filter((e) =>
        (e.name + e.role).toLowerCase().includes(q.toLowerCase())
      ),
    [q]
  );
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Сотрудники</h2>
        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Поиск по ФИО/должности…"
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
          />
          <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white">
            Добавить
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <Th>ФИО</Th>
              <Th>Должность</Th>
              <Th>Объектов</Th>
              <Th>Активных заявок</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((e) => (
              <tr key={e.id} className="hover:bg-slate-50">
                <Td className="font-medium">{e.name}</Td>
                <Td>{e.role}</Td>
                <Td>{e.objects}</Td>
                <Td>{e.active}</Td>
                <Td>
                  <div className="flex gap-2">
                    <button className="rounded-md border border-slate-200 px-2 py-1 text-xs hover:bg-slate-50">
                      Открыть
                    </button>
                    <button className="rounded-md border border-slate-200 px-2 py-1 text-xs hover:bg-slate-50">
                      Назначить
                    </button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EmployeesTab;
