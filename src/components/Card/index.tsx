import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title?: string;
  description?: string;
  onClick?: () => void;
  image?: string;
}

const Card = ({ title, description, image, onClick, children }: Props) => {
  return (
    <div
      data-testid="character-card"
      className="rounded-lg border overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {image && <img src={image} alt="avatar"/>}
      <div className="p-4">
        <div className="text-2xl font-semibold mb-2">{title}</div>
        <div>{description}</div>
        {children}
      </div>
    </div>
  )
};

export default Card;
