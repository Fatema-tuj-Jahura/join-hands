import React, { useState } from "react";
import ManageNeedPost from "../ManageNeedPost/ManageNeedPost";
import UpdateNeedPost from "../UpdateNeedPost/UpdateNeedPost";

const ManagePost = () => {
  const [activeTab, setActiveTab] = useState("needPost");

  return (
    <div className="max-w-7xl mx-auto my-10 p-6 bg-[#3a5a40] rounded-lg shadow-md border border-gray-200">
      {/* Tabs */}
      <div className="tabs tabs-boxed flex justify-center bg-[#b1c095] p-2 rounded-lg gap-2">
        <button
          onClick={() => setActiveTab("needPost")}
          className={`tab px-6 py-2 rounded-lg ${
            activeTab === "needPost" ? "bg-[#95AA9B] text-white font-semibold" : "bg-white text-black"
          }`}
        >
          My Volunteer Need Post
        </button>
        <button
          onClick={() => setActiveTab("requestPost")}
          className={`tab px-6 py-2 rounded-lg ${
            activeTab === "requestPost" ? "bg-[#95AA9B] text-white" : "bg-white text-gray-700 font-semibold"
          }`}
        >
          My Volunteer Request Post
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "needPost" && (
          <ManageNeedPost></ManageNeedPost>
        )}

        {activeTab === "requestPost" && (
          <UpdateNeedPost></UpdateNeedPost>
        )}
      </div>
    </div>
  );
};

export default ManagePost;
