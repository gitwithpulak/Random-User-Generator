import Profile from "@/components/Card";
import Error from "@/components/Error";
import Nav from "@/components/Navbar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Head from "next/head";
import React from "react";

const index = () => {
  const queryClient = useQueryClient();
  const fethData = async () => {
    let response = await axios.get("https://randomuser.me/api/");
    return response;
  };

  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: fethData,
    refetchOnWindowFocus: false,
  });
  const handlesubmit = () => {
    // if you use one queryKey then no need to write queryKey name into refetchQueries
    queryClient.refetchQueries();
    // queryClient.invalidateQueries();
  };

  if (isError) {
    return (
      <>
        <Head>
          <title>Random User Generator</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        </Head>
        <div className="">
          <Nav fth={isFetching} func={handlesubmit} />
          <div className="w-full mt-5 flex items-center justify-center">
            <Error err={error} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Random User Generator</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <div className="">
        <Nav fth={isFetching} func={handlesubmit} />
        <div className="w-full mt-5 flex items-center justify-center">
          <Profile data={data} fth={isFetching} />
        </div>
      </div>
    </>
  );
};

export default index;
