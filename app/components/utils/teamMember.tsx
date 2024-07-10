import React, { FC } from 'react';

interface TeamMemberProps {
    imgPath: string;
    name: string;
    position: string;
}

const TeamMember: FC<TeamMemberProps> = ({ imgPath, name, position }) => {
    return (
        <div>
            <div className="rounded-lg bg-white shadow-md">
                <img
                    alt="Team Member 1"
                    className="rounded-t-lg object-cover"
                    height="400"
                    src={imgPath}
                    style={{
                        aspectRatio: "400/400",
                        objectFit: "cover",
                    }}
                    width="400"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="mt-2 text-gray-500">{position}</p>
                    <div className="mt-4"></div>
                </div>
            </div>
        </div>
    );
};

TeamMember.displayName = 'TeamMember';

export default TeamMember;