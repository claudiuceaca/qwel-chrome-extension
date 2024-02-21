import "./BundleTab.css";
import { blockedBundlesData } from "./blockedBundlesData";

const BlockedBundlesTab = () => {
  return (
    <div>
      <h1 className="bundle-tab-title">Blocked Bundles Tab</h1>
      <div className="bundles-container">
        {
          blockedBundlesData.map((bundle: any) => {
            return (
              <button
                className={`bundle-container`}
                key={bundle.id}
              >
                {bundle.title}
                <ul>
                  {bundle.items.map((item: any) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </button>
            );
          }
          )
        }
      </div>
    </div>
  );
};

export default BlockedBundlesTab;
