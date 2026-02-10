import { memo } from "react";

const RewardsHeader = memo(() => (
  <section className="custom-width mt-10 flex items-center">
    <h3 id="reward-now" className="font-mono text-xl ml-2">Últimas recompensas</h3>
  </section>
));

export default RewardsHeader;
