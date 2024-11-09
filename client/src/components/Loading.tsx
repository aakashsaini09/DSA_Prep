
const Loading = () => {
  return (
    <>
      <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true"
  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="bg-transparent p-4 rounded-lg text-white text-3xl font-mono">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style={{shapeRendering: "auto", display: "block", background: "rgb(255, 255, 255);"}} xmlnsXlink="http://www.w3.org/1999/xlink"><g><circle r="20" fill="#e90c59" cy="50" cx="30">
        <animate begin="-0.5s" values="30;70;30" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
        </circle>
        <circle r="20" fill="#46dff0" cy="50" cx="70">
        <animate begin="0s" values="30;70;30" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
        </circle>
        <circle r="20" fill="#e90c59" cy="50" cx="30">
        <animate begin="-0.5s" values="30;70;30" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
        <animate repeatCount="indefinite" dur="1s" keyTimes="0;0.499;0.5;1" calcMode="discrete" values="0;0;1;1" attributeName="fill-opacity"></animate>
        </circle><g></g></g></svg>
      </div>
      </div>
    </>
  )
}

export default Loading
