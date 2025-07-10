import {
	SidebarContent as UiSidebarContent,
	SidebarMenu,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@ui/sidebar';

import { type SidebarGroupType } from './types';

type SidebarContentProps = {
	sidebarGroups: SidebarGroupType[];
};

function SidebarContent({ sidebarGroups }: SidebarContentProps) {
	return (
		<UiSidebarContent>
			{sidebarGroups.length > 0 ? (
				<SidebarGroup>
					{sidebarGroups.map((sidebarGroup, index) => (
						<div className="mb-2" key={index}>
							{sidebarGroup?.title ? (
								<SidebarGroupLabel>{sidebarGroup?.title}</SidebarGroupLabel>
							) : null}
							<SidebarGroupContent>
								<SidebarMenu>
									{sidebarGroup?.items?.map((sidebarGroupItem, itemIndex) => (
										<SidebarMenuItem key={itemIndex}>
											<SidebarMenuButton asChild>
												<div
													className="cursor-pointer"
													onClick={sidebarGroupItem?.onClick}
												>
													{sidebarGroupItem.icon}
													<span>{sidebarGroupItem?.label}</span>
												</div>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</div>
					))}
				</SidebarGroup>
			) : null}
		</UiSidebarContent>
	);
}

export default SidebarContent;
