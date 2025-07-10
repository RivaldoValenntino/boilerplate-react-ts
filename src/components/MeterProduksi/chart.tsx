import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";

type ChartProps = {
  data: number[]; // dari jam 07:00 sampai akhir data
  lokasi: string;
  produksiInfo: string;
};

const Chart: React.FC<ChartProps> = ({ data, lokasi, produksiInfo }) => {
  const jamMulai = 7;
  const jamSelesai = 18;
  const nowHour = 17; // contoh sekarang jam 17:00

  //  data dari jam 07:00 - 18:00
  const fullData = Array.from(
    { length: jamSelesai - jamMulai + 1 },
    (_, i) => ({
      hour: `${jamMulai + i}:00`,
      value: data[i] ?? 0,
    })
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="font-semibold text-left">{lokasi}</div>
      <p className="m-2 text-xs text-right text-green-600">{produksiInfo}</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={fullData} barCategoryGap={5}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="hour"
              interval={0}
              textAnchor="middle"
              height={30}
              angle={-35}
              tick={{ fontSize: 10 }}
            />

            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            {/* Garis vertikal jam sekarang */}
            <ReferenceLine x={`${nowHour}:00`} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {fullData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.hour === "11:00"
                      ? "#fb923c" // orange-400
                      : entry.value === 0
                      ? "#e5e7eb" // gray-200
                      : "#2563eb" // blue-600
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
