import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Avatar,
  Skeleton,
} from "@nextui-org/react";
import { Clock3, Globe2, Inbox, MapPin, UsersRound } from "lucide-react";

const Profile = ({ data, fth }) => {
  return (
    <>
      <Card className="p-3 min-w-[20rem]">
        <CardHeader className="flex flex-col justify-center items-center ">
          <Skeleton isLoaded={!fth} className="rounded-full p-1">
            <Avatar
              src={data && data.data.results[0].picture.large}
              className="w-32 h-32"
              isBordered
              color="primary"
            />
          </Skeleton>
          <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-2">
            <h2 className="min-w-[15rem] min-h-[1rem] font-bold text-4xl my-2">
              {data && data.data.results[0].name.title}{" "}
              {data && data.data.results[0].name.first}{" "}
              {data && data.data.results[0].name.last}
            </h2>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 text-xl font-bold items-center">
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <UsersRound />
              </Skeleton>
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <p className="min-w-[5rem] min-h-[1.5rem]">
                  {data && data.data.results[0].gender}
                </p>
              </Skeleton>
            </div>
            <div className="flex gap-4 text-xl font-bold items-center">
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <Clock3 />
              </Skeleton>
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <p className="min-w-[6rem] min-h-[1rem]">
                  {data && data.data.results[0].dob.age} Years
                </p>
              </Skeleton>
            </div>
            <div className="flex gap-4 text-xl font-bold items-center">
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <Inbox />
              </Skeleton>
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <p className="min-w-[12rem] min-h-[1.5rem]">
                  {data && data.data.results[0].email}
                </p>
              </Skeleton>
            </div>
            <div className="flex gap-4 text-xl font-bold items-center">
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <MapPin />
              </Skeleton>
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <p className="min-w-[10rem] min-h-[1rem]">
                  {data && data.data.results[0].location.city},{" "}
                  {data && data.data.results[0].location.state}
                </p>
              </Skeleton>
            </div>
            <div className="flex gap-4 text-xl font-bold items-center">
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <Globe2 />
              </Skeleton>
              <Skeleton isLoaded={!fth} className="rounded-lg p-1 mt-1">
                <p className="min-w-[6rem] min-h-[1.5rem]">
                  {data && data.data.results[0].location.country}
                </p>
              </Skeleton>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;
