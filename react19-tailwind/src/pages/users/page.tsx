import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { noop } from '../../utils/noop.util';
import { User } from '../../shared/api';

export const UserCard = ({
    user,
    deleteUserAction,
}: {
    user: User;
    deleteUserAction: any;
}) => (
    <div className="border p-2 m-2 rounded bg-gray-100 flex gap-2">
        {user.email}

        <form className="ml-auto">
            <input type="hidden" name="id" value={user.id} />
            <Link
                to={`/${user.id}/tasks`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
            >
                Tasks
            </Link>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
                formAction={deleteUserAction}
            >
                Delete
                {/* {state.error && (
                <div className="text-red-500">
                    {state.error}
                </div>
            )} */}
            </button>
        </form>
    </div>
);

export function UsersList({
    deleteUserAction,
    useUsersList,
}: {
    useUsersList: () => User[];
    deleteUserAction: any;
}) {
    const users = useUsersList();
    return (
        <div className="flex flex-col">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    deleteUserAction={deleteUserAction}
                />
            ))}
        </div>
    );
}

export const UsersPage = () => {
    return (
        <>
            <ErrorBoundary
                fallbackRender={(e) => (
                    <div className="text-red-500">
                        Something went wrong:{JSON.stringify(e)}{' '}
                    </div>
                )}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <UsersList
                        // deleteUserAction={deleteUserAction}
                        // useUsersList={useUsersList}
                        deleteUserAction={noop}
                        useUsersList={() => [
                            {
                                id: '1',
                                email: 'example@gmail.com',
                            },
                            {
                                id: '2',
                                email: 'dfgdfgdfg@gmail.com',
                            },
                        ]}
                    />
                </Suspense>
            </ErrorBoundary>
        </>
    );
};
