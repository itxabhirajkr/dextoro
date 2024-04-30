import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen w-full flex flex-col items-center bg-slate-900">
      <div className="header text-white  flex-row flex 1/2  ">
        <div className="left flex flex-col mt-12 ">
          <p>Start your journey on the DexToro platform with USDT airdrop</p>
          <p>Get up to $40 in USDT bonuses</p>
          <button className="bg-blue-700 text-white">
            Create an account to receive rewards
          </button>
        </div>
        <div className="right flex">
          <Image
            src="/imag.webp"
            alt="Example Image"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="event-time text-white">event time section</div>
      <div className="task-description text-white">
        Task Description Section
      </div>
      <div className="event-rules text-white flex flex-col my-18 mx-80 ">
        <h1>Event Rules</h1>
        <div className="flex flex-col">
          <div>
            1. Event period: from 04/15/2024 08:00 to 04/30/2024 23:59 (UTC+3)
          </div>
          <div>
            2.First 500 users who complete KYC authentication etc. can get 5
            USDT reward.
          </div>
          <div>
            3. This event is only for new users who created an account during
            the event period.
          </div>
          <div>
            4. Users must register for the event in order to participate.
          </div>
          <div>
            5. All tasks are independent of each other. Users can earn rewards
            for each individual task. Please note that only blockchain deposits
            will be considered (with the exception of the "Buy Crypto with
            Cards" and "P2P Trading" features). If users withdraw during the
            event, they will not be eligible for the reward.
          </div>
          <div>6. Rewards will be issued to the first 5,000 new users.</div>
          <div>
            7. Only positions open for more than 1 minute are included in the
            statistics of this event.
          </div>
          <div>8. Rewards will be issued within 72 hours of the event.</div>
          <div>
            9. The BingX company reserves the right to disqualify trades that it
            considers to be made from illegally registered accounts, as well as
            trades that show signs of trading, self-trading or market
            manipulation.
          </div>
          <div>10. BingX reserves the right to finalize this event.</div>
        </div>
      </div>

      <div className="footer text-white">
        © 2024 DexToro. All rights reserved.
      </div>
    </div>
  );
}
