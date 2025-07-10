type Props = {
  time: string;
  countdown: string;
};

const NextInputInfo = ({ time, countdown }: Props) => (
  <div className="grid grid-cols-12 mt-4 overflow-hidden text-sm text-white rounded-lg shadow-md">
    <div className="col-span-8 p-3 bg-primary">
      <p>Input Selanjutnya</p>
      <p className="font-semibold">{time}</p>
    </div>

    <div className="col-span-4 p-3 text-right bg-secondary">
      <p>Dalam</p>
      <p className="font-bold">{countdown} Menit</p>
    </div>
  </div>
);

export default NextInputInfo;
