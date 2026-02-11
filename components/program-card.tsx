type ProgramCardProps = {
  icon: React.ElementType;
  title: string;
  value: string;
};

const ProgramCard = ({ icon: Icon, title, value }: ProgramCardProps) => {
  return (
    <div className="flex flex-col justify-between items-center bg-card ring-foreground/10 shadow-xs ring-1 p-6 rounded-xl text-center">
      <Icon className="text-xl text-primary" />
      <h3 className="text-xl text-primary">{title}</h3>
      <p className="text-muted-foreground lg:text-lg ">{value}</p>
    </div>
  );
};

export default ProgramCard;
