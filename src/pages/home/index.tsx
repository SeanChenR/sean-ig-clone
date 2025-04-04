import IGHeader from "components/IGHeader"
import IGContainer from "components/IGContainer"
import IGStory from "./components/IGStory"
import IGPost from "./components/IGPost"
import IGProfile from "./components/IGProfile"
import Loading from "components/Loading"

import { useGetIGPostsQuery } from "services/homeServices"

type IGItemProps = {
  id: number;
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");

  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {
        data?.map((item: IGItemProps) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          )
        })}
    </>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          {/* left */}
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          {/* right */}
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  )
}

export default Home
